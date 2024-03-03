import { fullBlog } from "@/lib/interface";
import { client } from "@/lib/sanitypdf";
import { urlFor } from "@/lib/sanitypdf";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Chatbot from "@/components/googlechat";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  const imageUrl = urlFor(data.titleImage).url();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-center font-bold leading-8 tracking-tight sm:text-4xl">
        {data.title}
      </h1>
      <figure className="mt-10 flex justify-center">
        <Image
          src={urlFor(data.titleImage).url()}
          width={400}
          height={400}
          alt={data.title}
          priority
          className="rounded-lg shadow-lg"
          layout="intrinsic"
        
        />
      </figure>
      <div className="mt-8 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={data.content} />
      </div>
      {/* Center the Chatbot component */}
      <div className="flex justify-center items-center mt-10">
      <Chatbot imageUrl={imageUrl} />
      </div>
    </article>
  </div>
  );
}
