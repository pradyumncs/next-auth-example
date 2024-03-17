import { NextResponse } from "next/server";

    const post:any = [
      {
        id: 1,
        title: 'Nurse Stacy',
        description: 'There is not so much perfection in the world but my surname starts with P.',
        imageUrl: "/nsfww/1.jpg",
        likes: '243.5k'
      },
      {
        id: 2,
        title: 'Adventure Seeker Alex',
        description: 'Love exploring new places and trying new things. Let\'s go on an adventure together!',
        imageUrl: "/nsfww/2.jpg",
        likes: '128.9k'
      },
     
      {
        id: 3,
        title: 'Music Lover Emily',
        description: 'Passionate about music and looking for someone to share concert experiences with.',
        imageUrl: "/nsfww/3.jpg",
        likes: '315.2k'
      },
      {
        id: 4,
        title: 'Foodie Rachel',
        description: 'Passionate about food and cooking. Looking for someone to try new recipes with.',
        imageUrl: "/nsfww/4.jpg",
        likes: '185.3k'
      },
      {
        id: 5,
        title: 'Bookworm Lily',
        description: 'Seeking someone to discuss literature and spend cozy evenings reading together.',
        imageUrl: "/nsfww/5.jpg",
        likes: '204.7k'
      },
      {
        id: 7,
        title: 'Fitness Enthusiast Sarah',
        description: 'Into fitness and outdoor activities. Let\'s go for a run or hike together!',
        imageUrl: "/nsfww/7.jpg",
        likes: '192.3k'
      },
      {
        id: 8,
        title: 'Artistic Sophie',
        description: 'Passionate about painting and drawing. Looking for someone to create art with.',
        imageUrl: "/nsfww/8.jpg",
        likes: '278.6k'
      },
      {
        id: 9,
        title: 'Animal Lover Mia',
        description: 'Adores animals and spends free time volunteering at the local shelter.',
        imageUrl: "/nsfww/9.jpg",
        likes: '176.4k'
      },
      {
        id: 10,
        title: 'Travel Enthusiast Chloe',
        description: 'Wanderlust-driven adventurer seeking a partner for exploring the world.',
        imageUrl: "/nsfww/10.jpg",
        likes: '341.9k'
      },
    
    
      {
        id: 35,
        title: 'Mrs Incredible',
        description: 'Bookworm and aspiring entrepreneur, lost in fictional worlds and seeking someone to create a real-life happily ever after with.',
        imageUrl: "/home1/35.jpg",
        likes: '549.2k'
      },
      {
        id: 36,
        title: 'Benjamin',
        description: 'Musician, serenading the world and searching for someone to harmonize with life’s melodies.',
        imageUrl: "/home1/36.jpg",
        likes: '938.6k'
      },
      {
        id: 37,
        title: 'Pink Wolf',
        description: "Ava's restaurant isn't just about food, it's about creating unforgettable experiences. One evening, a charming musician named Benjamin walks in, serenading the guests with his melodies. As their paths intertwine over a shared love for music and art, could their connection be the perfect harmony?",
        imageUrl: "/home1/37.jpg",
        likes: '938.6k'
      },
      {
        id: 38,
        title: 'Benjamin',
        description: "Benjamin's guitar isn't just an instrument, it's his voice. While busking on a street corner, he catches the eye of Mia, a bookworm lost in a fantastical world. As their conversation flows from fictional adventures to real-life possibilities, could their connection be a story waiting to be written?",
        imageUrl: "/home1/38.jpg",
        likes: '549.2k'
      },
      {
        id: 39,
        title: 'Mia',
        description: "Mia's love for books goes beyond reading, it's a portal to new worlds. At a local bookstore, she bumps into Alexander, a photographer capturing fleeting moments in time. As they share their passions and delve into each other's stories, could their connection be the most captivating chapter yet?",
        imageUrl: "/home1/39.jpg",
        likes: '712.5k'
      },
      {
        id: 40,
        title: 'Black Lover',
        description: "Alexander's lens captures not just images, but emotions. On a nature hike, he encounters Sophia, a fashion designer with a flair for creating beauty. As they discuss art and the world around them, could their connection be a masterpiece in the making?",
        imageUrl: "/home1/40.jpg",
        likes: '1.0M'
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
        imageUrl: "/home1/19.jpg",
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
        imageUrl: "/home1/21.jpg",
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
      {
        id: 26,
        title: 'David',
        description: 'Software developer by day, hopeless romantic by night. Looking for someone to write our own love story.',
        imageUrl: "/home1/26.jpg",
        likes: '741.2k'
      },
      {
        id: 27,
        title: 'Amelia',
        description: 'Aspiring artist, seeking a partner whose heart is a canvas for our dreams to be painted on.',
        imageUrl: "/home1/27.jpg",
        likes: '923.5k'
      },
      {
        id: 28,
        title: 'Liam',
        description: 'Travel blogger, searching for someone to share breathtaking sunsets and unforgettable adventures with.',
        imageUrl: "/home1/28.jpg",
        likes: '1.1M'
      },
      {
        id: 29,
        title: 'Sakura',
        description: 'Ninja, crafting sweet treats and hoping to find someone to share the sweetness of life with.',
        imageUrl: "/home1/29.jpg",
        likes: '847.9k'
      },
      {
        id: 30,
        title: 'Ghost', // Starting with a guy at ID 30
        description: 'Architect, building dreams and seeking someone to share the blueprint of our future together.',
        imageUrl: "/home1/30.jpg",
        likes: '621.4k'
      },
      {
        id: 31,
        title: 'Olivia',
        description: 'Yoga instructor, finding peace within and searching for someone to share a life of tranquility with.',
        imageUrl: "/home1/31.jpg",
        likes: '498.7k'
      },
      {
        id: 32,
        title: 'Naruto',
        description: 'Hokage , Lover.Looking for someone to be my muse and confidante.',
        imageUrl: "/home1/32.jpg",
        likes: '873.1k'
      },
      {
        id: 33,
        title: 'Sophia',
        description: 'Fashion designer, creating beauty and seeking a partner to share a world of style and love.',
        imageUrl: "/home1/33.jpg",
        likes: '1.0M'
      },
      {
        id: 34,
        title: 'Alexander',
        description: 'God mode will lick you someone to share the journey of life’s beautiful frames.',
        imageUrl: "/home1/34.jpg",
        likes: '712.5k'
      },
      {
        id: 41,
        title: 'Sophia',
        description: "Sophia's designs aren't just clothes, they're expressions of the soul. During a fashion show, she meets Ethan, a barista and aspiring writer brewing stories with every cup. As they exchange thoughts on creativity and self-expression, could their connection be the perfect blend of art and passion?",
        imageUrl: "/home1/41.jpg",
        likes: '873.1k'
      },
      {
        id: 42,
        title: 'Ethan',
        description: "Ethan's coffee shop isn't just a cafe, it's a space for inspiration. One afternoon, a yoga instructor named Olivia walks in, seeking a moment of peace. As they discuss mindfulness and finding balance, could their connection be the perfect cup of serenity?",
        imageUrl: "/home1/42.jpg",
        likes: '498.7k'
      },
      {
        id: 43,
        title: 'Olivia',
        description: "Olivia's yoga practice isn't just about poses, it's about inner peace. At a meditation retreat, she meets William, an architect building dreams one design at a time. As they explore their inner landscapes, could their connection be the foundation for a lasting bond?",
        imageUrl: "/home1/43.jpg",
        likes: '621.4k'
      },
      {
        id: 44,
        title: 'William',
        description: "William's blueprints aren't just for buildings, they're for a brighter future. Volunteering at a community garden, he meets Isabella, a passionate baker whose treats bring smiles to everyone's faces. As they work together and share their visions, could their connection be the sweetest recipe for success?",
        imageUrl: "/home1/44.jpg",
        likes: '621.4k'
        },
        {
        id: 45,
        title: 'Isabella',
        description: "Isabella's bakery isn't just about delicious treats, it's about spreading joy. One morning, a world traveler named Liam walks in, his eyes sparkling with stories from distant lands. As they share tales of adventure and a love for exploring, could their connection be the journey of a lifetime?",
        imageUrl: "/home1/45.jpg",
        likes: '847.9k'
        },
        {
        id: 46,
        title: 'Liam',
        description: "Liam's passport is his most prized possession, a testament to his wanderlust. On a local hike, he encounters Amelia, an artist whose vibrant paintings capture the essence of life. As they discuss hidden gems and the beauty of the world, could their connection be the perfect adventure partner?",
        imageUrl: "/home1/46.jpg",
        likes: '1.1M'
        },
      {
        id: 47,
        title: 'Amelia',
        description: "Amelia's art studio isn't just a workspace, it's a portal to boundless creativity. One rainy afternoon, a charming barista named Ethan walks in, seeking refuge with a cup of coffee. As they chat about art and self-expression, could their connection be a masterpiece in the making?",
        imageUrl: "/home1/47.jpg",
        likes: '923.5k'
      },
      {
        id: 48,
        title: 'Ethan',
        description: "Ethan's coffee shop isn't just a cafe, it's a hub for budding artists. One evening, a yoga instructor named Olivia walks in, seeking a moment of peace amidst the creative buzz. As they discuss mindfulness and finding balance, could their connection be the perfect cup of inspiration?",
        imageUrl: "/home1/48.jpg",
        likes: '498.7k'
      },
      {
        id: 49,
        title: 'Olivia',
        description: "Olivia's yoga practice isn't just about poses, it's about cultivating inner strength. Volunteering at a local animal shelter, she meets William, an architect with a passion for building safe havens. As they care for animals and discuss their dreams, could their connection be the foundation for something truly special?",
        imageUrl: "/home1/49.jpg",
        likes: '621.4k'
      },
      {
        id: 50,
        title: 'William',
        description: "William's blueprints aren't just for buildings, they're for creating positive change. Attending a climate change rally, he meets Isabella, a passionate baker using her platform to raise awareness. As they share their concerns and hopes for the future, could their connection be the catalyst for a greener tomorrow?",
        imageUrl: "/home1/50.jpg",
        likes: '621.4k'
      }
    ]

    export async function GET(request: Request, context:any) {
        const {params} = context;
    return NextResponse.json({
        post: post.find((post:any) => post.id === Number(params.id)) || null,
    })

}