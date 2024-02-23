
async function getpostbyid(postid: string) {
    const response = await fetch(`https://nsfwaichat.tech/api/detail/${postid}`,{
    method: "GET",
    });

    return response.json();
  }
  
  export default async function Ticketdetails({params}:any) {

const {post} = await getpostbyid(params.id)

  return (
    <div>Ticketdetails
 
      <p>
        {post.title}
      </p>  
 
    </div>
   
  )
}

 