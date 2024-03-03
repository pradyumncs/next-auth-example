
  
  export default async function Ticketdetails({params}:any) {

    async function getpostbyid(postid: string) {
      const response = await fetch(`https://nsfwaichat.tech/api/detail/${postid}`,{
      method: "GET",
      });
  
      return response.json();
    }
    const {post} = await getpostbyid(params.id)

  return (
    <div>Ticketdetailsvx
 z
      <p>
        {post.title}
        {post.title}
        {post.description}
      </p>  
 
    </div>
   
  )
}

 