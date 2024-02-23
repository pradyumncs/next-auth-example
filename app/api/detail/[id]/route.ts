import { NextResponse } from "next/server";

const post:any = [
    {
        id: 1,
        title: "Card Title 1",
        description: "This is a description for card 1.",
      },
   
    {
        id:12,
        title: "Hello",
        description: "Amazing post",

    }
]

export async function GET(request: Request, context:any) {
const {params} = context;
return NextResponse.json({
post: post.find((post:any) => post.id === Number(params.id)) || null,
})

}