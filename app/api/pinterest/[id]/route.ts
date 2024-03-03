import { NextResponse } from "next/server";

    const post:any = [
        { 
            id: 1,
            title: 'Nurse Stacy', 
            description: 'There is not so much perfection in the world but my surname starts with P.', 
            imageUrl: "/home/1.png",
            likes: '243.5k'
          },
          {
            id: 2,
            title: 'Jack Smith', 
            description: 'Would I rather be feared or loved? Easy, both', 
            imageUrl: "/home/2.png",
            likes: '755.0k'
          },
          {
            id: 3,
            title: 'Emily', 
            description: 'I believe in love at first sight, or should I walk by again?', 
            imageUrl: "/home/3.png",
            likes: '492.8k'
          },
          {
            id: 4,
            title: 'Chris Johnson', 
            description: 'Let’s create our own story together', 
            imageUrl: "/home/4.png",
            likes: '365.2k'
          },
          {
            id: 5,
            title: 'Sophie', 
            description: 'Looking for someone to explore the world with', 
            imageUrl: "/home/5.png",
            likes: '621.9k'
          },
          {
            id: 6,
            title: 'Daniel Brown', 
            description: 'Adventure seeker and food lover', 
            imageUrl: "/home/6.png",
            likes: '804.3k'
          },
          {
            id: 7,
            title: 'Olivia', 
            description: 'Let’s make every moment unforgettable', 
            imageUrl: "/home/7.png",
            likes: '278.7k'
          },
          {
            id: 8,
            title: 'Michael', 
            description: 'Soccer fan, looking for someone to score lifes goals with.', 
            imageUrl: "/home/8.png",
            likes: '561.0k'
          },
          {
            id: 9,
            title: 'Sophia', 
            description: 'Aspiring chef, my recipes are as adventurous as my travel plans.', 
            imageUrl: "/home/9.png",
            likes: '432.6k'
          },
          {
            id: 10,
            title: 'Miguel O Hara', 
            description: 'Tech geek, love to discuss everything from AI to the latest in VR.', 
            imageUrl: "/home/10.png",
            likes: '739.2k'
          },
          {
            id: 11,
            title: 'Olivia', 
            description: 'Bookworm and poet, seeking someone to write the next chapter with.', 
            imageUrl: "/home/11.png",
            likes: '584.2k'
          },
          {
            id: 12,
            title: 'Daniel', 
            description: 'Rock climber and adventure enthusiast, lets climb new heights together.', 
            imageUrl: "/home/12.png",
            likes: '327.6k'
          },
          {
            id: 13,
            title: 'Emma', 
            description: 'Yoga teacher, finding balance in life and looking for someone to share the journey.', 
            imageUrl: "/home/13.png",
            likes: '479.3k'
          },
          {
            id: 14,
            title: 'Ryan', 
            description: 'Aspiring musician, my lifes a soundtrack waiting for a duet partner.', 
            imageUrl: "/home/14.png",
            likes: '641.8k'
          },
          {
            id: 15,
            title: 'Isabella', 
            description: 'Fashion blogger, blending style and substance. Looking for my trendsetter.', 
            imageUrl: "/home/15.png",
            likes: '714.5k'
          },
          {
            id: 16,
            title: 'Joshua', 
            description: 'Coffee connoisseur and startup enthusiast, lets brew some ideas together.', 
            imageUrl: "/home/16.png",
            likes: '548.9k'
          },
          {
            id: 17,
            title: 'Mia', 
            description: 'Cinephile and amateur filmmaker, looking for my co-star in life\'s movie.', 
            imageUrl: "/home/17.png",
            likes: '376.4k'
          },
          {
            id: 18,
            title: 'Lucas', 
            description: 'Outdoor photographer, capturing life\'s moments, seeking a muse.', 
            imageUrl: "/home/18.png",
            likes: '672.1k'
          },
          {
            id: 19,
            title: 'Ava', 
            description: 'Pastry chef in the making, my life is as sweet as my desserts.', 
            imageUrl: "/home/20.png",
            likes: '416.7k'
          },
          {
            id: 20,
            title: 'Noah', 
            description: 'Engineer and puzzle solver, looking for someone to connect the missing pieces.', 
            imageUrl: "/home/20.png",
            likes: '813.0k'
          },
          {
            id: 21,
            title: 'Lily', 
            description: 'Gardener and nature lover, let’s grow something beautiful together.', 
            imageUrl: "/home/22.png",
            likes: '572.3k'
          },
          {
            id: 22,
            title: 'Matthew', 
            description: 'Historian and world traveler, seeking someone to write history with.', 
            imageUrl: "/home/22.png",
            likes: '374.8k'
          },
          {
            id: 23,
            title: 'Grace', 
            description: 'Aspiring novelist, crafting stories and looking for my co-author.', 
            imageUrl: "/home/23.png",
            likes: '682.6k'
          },
          {
            id: 24,
            title: 'Elijah', 
            description: 'Personal trainer, helping others meet goals while chasing my own.', 
            imageUrl: "/home/24.png",
            likes: '426.1k'
          },
          {
            id: 25,
            title: 'Charlotte', 
            description: 'Vet nurse, animal lover, looking for a human companion.', 
            imageUrl: "/home/25.png",
            likes: '519.7k'
          },
    ]

    export async function GET(request: Request, context:any) {
        const {params} = context;
    return NextResponse.json({
        post: post.find((post:any) => post.id === Number(params.id)) || null,
    })

}