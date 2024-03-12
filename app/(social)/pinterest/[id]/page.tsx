
  
  import Chatbot from "@/components/googlechat";
  export default async function Ticketdetails({params}:any) {

    async function getpostbyid(postid: string) {
      const response = await fetch(`https://nsfwaichat.tech/api/pinterest/${postid}`,{
      method: "GET",
      });
  
      return response.json();
    }
    const {post} = await getpostbyid(params.id)

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-center font-bold leading-8 tracking-tight sm:text-4xl">
        {post.title}
      </h1>
     
  
      {/* Center the Chatbot component */}
      <div className="flex justify-center items-center mt-10">
      <Chatbot imageUrl={post.imageUrl} />
      </div>
    </article>
  </div>
   
  )
}

 