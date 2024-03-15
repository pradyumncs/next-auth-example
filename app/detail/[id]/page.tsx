  import { Separator } from "@/components/ui/separator"
  import { Badge } from "@/components/ui/badge"
  import Image from "next/image"
  
  import Chatbothome from "@/components/chatbothome";

  export default async function Ticketdetails({params}:any) {

    async function getpostbyid(postid: string) {

      const response = await fetch(`https://nsfwaichat.tech/api/detail/${postid}`,{
      next: { revalidate: 3600 },
      method: "GET",
      });
  
      return response.json();
    }
    const {post} = await getpostbyid(params.id)
  
  return (
    <div>
 
  <div className="flex justify-center">
    <div className="flex items-center">
    <div className="relative h-14 w-14 mr-4">
      <Image
        src={post.imageUrl}
        alt="Post Image"
        className="rounded-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
      <div>
        <h1 className="text-xl font-bold mb-1 pl-4">{post.title}</h1>
        <p className="text-sm mb-1 pl-4">{post.description}</p>
        <Badge variant="destructive" className=" pl-2">Remember: Everthing Character say is made up</Badge>
      </div>
    </div>
  </div>
  <Separator className="mt-4" />
      
      <div className="flex justify-center items-center mt-10">
      <Chatbothome imageUrl={post.imageUrl} title={post.title}/>
      </div>
 
    </div>
   
  )
}

 