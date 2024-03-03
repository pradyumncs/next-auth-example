import { NextResponse } from "next/server";

    const post:any = [
    {
        id: 1,
        title: "Card Title 1mada",
        description: "This is a description for card 1sa.",
      },
   
      { 
        id: 2,
        title: 'Nurse Stacy', 
        description: 'There is not so much perfection in the world but my surname starts with P.', 
        imageUrl: "/home/1.png",
        likes: '243.5k'
      },
    ]

    export async function GET(request: Request, context:any) {
        const {params} = context;
    return NextResponse.json({
        post: post.find((post:any) => post.id === Number(params.id)) || null,
    })

}