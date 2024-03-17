import { NextResponse } from "next/server";

    const post:any = [
      { 
        id: 1,
        title: 'Nurse Stacy', 
        description: 'There is not so much perfection in the world but my surname starts with P.', 
        imageUrl: "/home1/1.jpg",
        likes: '243.5k'
      },
      {
        id: 2,
        title: 'Jack Smith', 
        description: 'Would I rather be feared or loved? Easy, both', 
        imageUrl: "/home1/2.jpg",
        likes: '755.0k'
      },
      {
        id: 3,
        title: 'Emily', 
        description: 'I believe in love at first sight, or should I walk by again?', 
        imageUrl: "/home1/3.jpg",
        likes: '492.8k'
      },
      {
        id: 4,
        title: 'Chris Johnson', 
        description: 'Let’s create our own story together', 
        imageUrl: "/home1/4.jpg",
        likes: '365.2k'
      },
      {
        id: 5,
        title: 'Sophie', 
        description: 'Looking for someone to explore the world with', 
        imageUrl: "/home1/5.jpg",
        likes: '621.9k'
      },
      {
        id: 6,
        title: 'Daniel Brown', 
        description: 'Adventure seeker and food lover', 
        imageUrl: "/home1/6.jpg",
        likes: '804.3k'
      },
      {
        id: 7,
        title: 'Olivia', 
        description: 'Let’s make every moment unforgettable', 
        imageUrl: "/home1/7.jpg",
        likes: '278.7k'
      },
      {
        id: 8,
        title: 'Michael', 
        description: 'Soccer fan, looking for someone to score lifes goals with.', 
        imageUrl: "/home1/8.jpg",
        likes: '561.0k'
      },
      {
        id: 9,
        title: 'Sophia', 
        description: 'Aspiring chef, my recipes are as adventurous as my travel plans.', 
        imageUrl: "/home1/9.jpg",
        likes: '432.6k'
      },
      {
        id: 10,
        title: 'Miguel O Hara', 
        description: 'Tech geek, love to discuss everything from AI to the latest in VR.', 
        imageUrl: "/home1/10.jpg",
        likes: '739.2k'
      },
      {
        id: 11,
        title: 'Olivia', 
        description: 'Bookworm and poet, seeking someone to write the next chapter with.', 
        imageUrl: "/home1/11.jpg",
        likes: '584.2k'
      },
      {
        id: 12,
        title: 'Daniel', 
        description: 'Rock climber and adventure enthusiast, lets climb new heights together.', 
        imageUrl: "/home1/12.jpg",
        likes: '327.6k'
      },
      {
        id: 13,
        title: 'Emma', 
        description: 'Yoga teacher, finding balance in life and looking for someone to share the journey.', 
        imageUrl: "/home1/13.jpg",
        likes: '479.3k'
      },
      {
        id: 14,
        title: 'Ryan', 
        description: 'Aspiring musician, my lifes a soundtrack waiting for a duet partner.', 
        imageUrl: "/home1/14.jpg",
        likes: '641.8k'
      },
      {
        id: 15,
        title: 'Isabella', 
        description: 'Fashion blogger, blending style and substance. Looking for my trendsetter.', 
        imageUrl: "/home1/15.jpg",
        likes: '714.5k'
      },
      {
        id: 16,
        title: 'Joshua', 
        description: 'Coffee connoisseur and startup enthusiast, lets brew some ideas together.', 
        imageUrl: "/home1/16.jpg",
        likes: '548.9k'
      },
      {
        id: 17,
        title: 'Mia', 
        description: 'Cinephile and amateur filmmaker, looking for my co-star in life\'s movie.', 
        imageUrl: "/home1/17.jpg",
        likes: '376.4k'
      },
      {
        id: 18,
        title: 'Lucas', 
        description: 'Outdoor photographer, capturing life\'s moments, seeking a muse.', 
        imageUrl: "/home1/18.jpg",
        likes: '672.1k'
      },
      {
        id: 19,
        title: 'Ava', 
        description: 'Pastry chef in the making, my life is as sweet as my desserts.', 
        imageUrl: "/home1/20.jpg",
        likes: '416.7k'
      },
      {
        id: 20,
        title: 'Noah', 
        description: 'Engineer and puzzle solver, looking for someone to connect the missing pieces.', 
        imageUrl: "/home1/20.jpg",
        likes: '813.0k'
      },
      {
        id: 21,
        title: 'Lily', 
        description: 'Gardener and nature lover, let’s grow something beautiful together.', 
        imageUrl: "/home1/22.jpg",
        likes: '572.3k'
      },
      {
        id: 22,
        title: 'Matthew', 
        description: 'Historian and world traveler, seeking someone to write history with.', 
        imageUrl: "/home1/22.jpg",
        likes: '374.8k'
      },
      {
        id: 23,
        title: 'Grace', 
        description: 'Aspiring novelist, crafting stories and looking for my co-author.', 
        imageUrl: "/home1/23.jpg",
        likes: '682.6k'
      },
      {
        id: 24,
        title: 'Elijah', 
        description: 'Personal trainer, helping others meet goals while chasing my own.', 
        imageUrl: "/home1/24.jpg",
        likes: '426.1k'
      },
      {
        id: 25,
        title: 'Charlotte', 
        description: 'Vet nurse, animal lover, looking for a human companion.', 
        imageUrl: "/home1/25.jpg",
        likes: '519.7k'
      },
    ]

    export async function GET(request: Request, context:any) {
        const {params} = context;
    return NextResponse.json({
        post: post.find((post:any) => post.id === Number(params.id)) || null,
    })

}