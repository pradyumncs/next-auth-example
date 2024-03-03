import { NextResponse } from "next/server";

    const post:any = [
        { 
            id: 1,
            title: 'Nurse Stacy', 
            description: 'There is not so much perfection in the world but my surname starts with P.', 
            imageUrl: "/pinterest/1.png",
            likes: '243.5k'
          },
          {
            id: 2,
            title: 'Jack Smith', 
            description: 'Would I rather be feared or loved? Easy, both', 
            imageUrl: "/pinterest/2.png",
            likes: '755.0k'
          },
          {
            id: 3,
            title: 'Emily', 
            description: 'I believe in love at first sight, or should I walk by again?', 
            imageUrl: "/pinterest/3.png",
            likes: '492.8k'
          },
          {
            id: 4,
            title: 'Chris Johnson', 
            description: 'Let’s create our own story together', 
            imageUrl: "/pinterest/4.png",
            likes: '365.2k'
          },
          {
            id: 5,
            title: 'Sophie', 
            description: 'Looking for someone to explore the world with', 
            imageUrl: "/pinterest/5.png",
            likes: '621.9k'
          },
          {
            id: 6,
            title: 'Daniel Brown', 
            description: 'Adventure seeker and food lover', 
            imageUrl: "/pinterest/6.png",
            likes: '804.3k'
          },
          {
            id: 7,
            title: 'Olivia', 
            description: 'Let’s make every moment unforgettable', 
            imageUrl: "/pinterest/7.png",
            likes: '278.7k'
          },
          {
            id: 8,
            title: 'Michael', 
            description: 'Soccer fan, looking for someone to score lifes goals with.', 
            imageUrl: "/pinterest/8.png",
            likes: '561.0k'
          },
          {
            id: 9,
            title: 'Sophia', 
            description: 'Aspiring chef, my recipes are as adventurous as my travel plans.', 
            imageUrl: "/pinterest/9.png",
            likes: '432.6k'
          },
          {
            id: 10,
            title: 'Miguel O Hara', 
            description: 'Tech geek, love to discuss everything from AI to the latest in VR.', 
            imageUrl: "/pinterest/10.png",
            likes: '739.2k'
          },
          {
            id: 11,
            title: 'Olivia', 
            description: 'Bookworm and poet, seeking someone to write the next chapter with.', 
            imageUrl: "/pinterest/11.png",
            likes: '584.2k'
          },
          {
            id: 12,
            title: 'Daniel', 
            description: 'Rock climber and adventure enthusiast, lets climb new heights together.', 
            imageUrl: "/pinterest/12.png",
            likes: '327.6k'
          },
          {
            id: 13,
            title: 'Emma', 
            description: 'Yoga teacher, finding balance in life and looking for someone to share the journey.', 
            imageUrl: "/pinterest/13.png",
            likes: '479.3k'
          },
          {
            id: 14,
            title: 'Ryan', 
            description: 'Aspiring musician, my lifes a soundtrack waiting for a duet partner.', 
            imageUrl: "/pinterest/14.png",
            likes: '641.8k'
          },
          {
            id: 15,
            title: 'Isabella', 
            description: 'Fashion blogger, blending style and substance. Looking for my trendsetter.', 
            imageUrl: "/pinterest/15.png",
            likes: '714.5k'
          },
          {
            id: 16,
            title: 'Joshua', 
            description: 'Coffee connoisseur and startup enthusiast, lets brew some ideas together.', 
            imageUrl: "/pinterest/16.png",
            likes: '548.9k'
          },
          {
            id: 17,
            title: 'Mia', 
            description: 'Cinephile and amateur filmmaker, looking for my co-star in life\'s movie.', 
            imageUrl: "/pinterest/17.png",
            likes: '376.4k'
          },
          {
            id: 18,
            title: 'Lucas', 
            description: 'Outdoor photographer, capturing life\'s moments, seeking a muse.', 
            imageUrl: "/pinterest/18.png",
            likes: '672.1k'
          },
          {
            id: 19,
            title: 'Ava', 
            description: 'Pastry chef in the making, my life is as sweet as my desserts.', 
            imageUrl: "/pinterest/20.png",
            likes: '416.7k'
          },
          {
            id: 20,
            title: 'Noah', 
            description: 'Engineer and puzzle solver, looking for someone to connect the missing pieces.', 
            imageUrl: "/pinterest/20.png",
            likes: '813.0k'
          },
          {
            id: 21,
            title: 'Lily', 
            description: 'Gardener and nature lover, let’s grow something beautiful together.', 
            imageUrl: "/pinterest/22.png",
            likes: '572.3k'
          },
          {
            id: 22,
            title: 'Matthew', 
            description: 'Historian and world traveler, seeking someone to write history with.', 
            imageUrl: "/pinterest/22.png",
            likes: '374.8k'
          },
          {
            id: 23,
            title: 'Grace', 
            description: 'Aspiring novelist, crafting stories and looking for my co-author.', 
            imageUrl: "/pinterest/23.png",
            likes: '682.6k'
          },
          {
            id: 24,
            title: 'Elijah', 
            description: 'Personal trainer, helping others meet goals while chasing my own.', 
            imageUrl: "/pinterest/24.png",
            likes: '426.1k'
          },
          {
            id: 25,
            title: 'Charlotte', 
            description: 'Vet nurse, animal lover, looking for a human companion.', 
            imageUrl: "/pinterest/25.png",
            likes: '519.7k'
          },
          {
            id: 26,
            title: "Owen",
            description: "Surfing enthusiast and beach lover, seeking a partner to ride the waves of life with.",
            imageUrl: "/pinterest/26.pintejpgrest",
            likes: "732.4k"
          },
          {
            id: 27,
            title: "Amelia",
            description: "Art curator with a passion for creativity, looking for someone to appreciate the beauty of life with.",
            imageUrl: "/pinterest/27.pintejpgrest",
            likes: "619.8k"
          },
          {
            id: 28,
            title: "Henry",
            description: "Software developer by day, gamer by night. Looking for a player two to conquer life's quests together.",
            imageUrl: "/pinterest/28.pintejpgrest",
            likes: "467.3k"
          },
          {
            id: 29,
            title: "Eva",
            description: "Environmental activist and sustainability advocate, seeking someone who cares about the planet as much as I do.",
            imageUrl: "/pinterest/29.pintejpgrest",
            likes: "573.6k"
          },
          {
            id: 30,
            title: "Liam",
            description: "Music producer, constantly searching for the perfect beat and the perfect partner to share it with.",
            imageUrl: "/pinterest/30.pintejpgrest",
            likes: "854.2k"
          },
          {
            id: 31,
            title: "Harper",
            description: "Graphic designer with an eye for detail and a heart full of dreams. Let's create something beautiful together.",
            imageUrl: "/pinterest/31.pintejpgrest",
            likes: "742.1k"
          },
          {
            id: 32,
            title: "Aiden",
            description: "Adventurer and risk-taker, seeking a fellow thrill-seeker to explore the unknown.",
            imageUrl: "/pinterest/32.pintejpgrest",
            likes: "618.9k"
          },
          {
            id: 33,
            title: "Chloe",
            description: "Fashion designer and trendsetter, looking for someone to walk the runway of life with.",
            imageUrl: "/pinterest/33.pintejpgrest",
            likes: "527.4k"
          },
          {
            id: 34,
            title: "James",
            description: "Writer and dreamer, penning tales of adventure and searching for someone to share them with.",
            imageUrl: "/pinterest/34.pintejpgrest",
            likes: "689.3k"
          },
          {
            id: 35,
            title: "Zoe",
            description: "Animal rights activist and vegan chef, passionate about making the world a better place for all creatures.",
            imageUrl: "/pinterest/35.pintejpgrest",
            likes: "614.7k"
          },
          {
            id: 36,
            title: "Alexander",
            description: "Entrepreneur and visionary, seeking a partner to build an empire with.",
            imageUrl: "/pinterest/36.pintejpgrest",
            likes: "793.2k"
          },
          {
            id: 37,
            title: "Madison",
            description: "Psychology student fascinated by the mysteries of the mind, looking for someone to explore them with.",
            imageUrl: "/pinterest/37.pintejpgrest",
            likes: "468.5k"
          },
          {
            id: 38,
            title: "Ethan",
            description: "Tech enthusiast and future inventor, seeking a co-creator for my next big idea.",
            imageUrl: "/pinterest/38.pintejpgrest",
            likes: "527.9k"
          },
          {
            id: 39,
            title: "Natalie",
            description: "Travel blogger on a quest for adventure and meaningful connections around the globe.",
            imageUrl: "/pinterest/39.pintejpgrest",
            likes: "752.6k"
          },
          {
            id: 40,
            title: "William",
            description: "History buff and museum aficionado, looking for someone to explore the past and create new memories with.",
            imageUrl: "/pinterest/40.pintejpgrest",
            likes: "603.8k"
          },
          {
            id: 41,
            title: "Addison",
            description: "Fitness trainer and health coach, passionate about helping others reach their full potential.",
            imageUrl: "/pinterest/41.pintejpgrest",
            likes: "684.7k"
          },
          {
            id: 42,
            title: "Mason",
            description: "Architect and urban planner, dreaming of building a future together in the city of our dreams.",
            imageUrl: "/pinterest/42.pintejpgrest",
            likes: "527.2k"
          },
          {
            id: 43,
            title: "Scarlett",
            description: "Actress and storyteller, seeking someone to share the spotlight and create magic with.",
            imageUrl: "/pinterest/43.pintejpgrest",
            likes: "616.4k"
          },
          {
            id: 44,
            title: "Benjamin",
            description: "Financial analyst by day, aspiring chef by night. Seeking a taste tester and life partner.",
            imageUrl: "/pinterest/44.pintejpgrest",
            likes: "698.5k"
          },
          {
            id: 45,
            title: "Victoria",
            description: "Art historian and museum curator, searching for someone to appreciate the beauty of the past and create a masterpiece of the future.",
            imageUrl: "/pinterest/45.pintejpgrest",
            likes: "572.9k"
          },
          {
            id: 46,
            title: "David",
            description: "Veterinarian with a heart for animals and a love for the great outdoors. Seeking a fellow nature enthusiast.",
            imageUrl: "/pinterest/46.pintejpgrest",
            likes: "739.1k"
          },
          {
            id: 47,
            title: "Mia",
            description: "Artist and dreamer, painting the world with colors of imagination. Looking for a muse to inspire my next masterpiece.",
            imageUrl: "/pinterest/47.pintejpgrest",
            likes: "623.7k"
          },
          {
            id: 48,
            title: "Joseph",
            description: "Philosopher and deep thinker, pondering the mysteries of life and seeking a kindred spirit to share the journey.",
            imageUrl: "/pinterest/48.pintejpgrest",
            likes: "548.2k"
          },
          {
            id: 49,
            title: "Avery",
            description: "Lawyer by profession, advocate for justice and equality. Seeking someone to fight the good fight alongside.",
            imageUrl: "/pinterest/49.pintejpgrest",
            likes: "684.9k"
          },
          {
            id: 50,
            title: "Logan",
            description: "Freelance writer and aspiring novelist, crafting stories of love and adventure. Seeking a muse to inspire my next chapter.",
            imageUrl: "/pinterest/50.pintejpgrest",
            likes: "714.6k"
          },
  {
    id: 51,
    title: "Emma",
    description: "Yoga teacher, finding balance in life and looking for someone to share the journey.",
    imageUrl: "/home/51.jpg",
    likes: "492.3k"
  },
  {
    id: 52,
    title: "Elijah",
    description: "Personal trainer, helping others meet goals while chasing my own.",
    imageUrl: "/home/52.jpg",
    likes: "426.1k"
  },
  {
    id: 53,
    title: "Charlotte",
    description: "Vet nurse, animal lover, looking for a human companion.",
    imageUrl: "/home/53.jpg",
    likes: "519.7k"
  },
  {
    id: 54,
    title: "Oliver",
    description: "Bookworm and poet, seeking someone to write the next chapter with.",
    imageUrl: "/home/54.jpg",
    likes: "584.2k"
  },
  {
    id: 55,
    title: "Daniel",
    description: "Rock climber and adventure enthusiast, let's climb new heights together.",
    imageUrl: "/home/55.jpg",
    likes: "327.6k"
  },
  {
    id: 56,
    title: "Lucy",
    description: "Nature lover and conservationist, passionate about protecting our planet.",
    imageUrl: "/home/56.jpg",
    likes: "682.6k"
  },
  {
    id: 57,
    title: "Max",
    description: "Musician and songwriter, composing the soundtrack of life one note at a time.",
    imageUrl: "/home/57.jpg",
    likes: "641.8k"
  },
  {
    id: 58,
    title: "Ava",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/58.jpg",
    likes: "416.7k"
  },
  {
    id: 59,
    title: "Jack",
    description: "Tech geek and future innovator, fascinated by the possibilities of tomorrow.",
    imageUrl: "/home/59.jpg",
    likes: "813.0k"
  },
  {
    id: 60,
    title: "Sophie",
    description: "Fashion designer with an eye for style and a passion for creativity.",
    imageUrl: "/home/60.jpg",
    likes: "572.3k"
  },
  {
    id: 61,
    title: "Noah",
    description: "Animal lover and wildlife photographer, capturing the beauty of nature one shot at a time.",
    imageUrl: "/home/61.jpg",
    likes: "374.8k"
  },
  {
    id: 62,
    title: "Grace",
    description: "Writer and storyteller, weaving tales of adventure and romance.",
    imageUrl: "/home/62.jpg",
    likes: "682.6k"
  },
  {
    id: 63,
    title: "Liam",
    description: "Coffee enthusiast and barista, brewing up happiness one cup at a time.",
    imageUrl: "/home/63.jpg",
    likes: "426.1k"
  },
  {
    id: 64,
    title: "Mia",
    description: "Film buff and aspiring director, bringing stories to life on the silver screen.",
    imageUrl: "/home/64.jpg",
    likes: "519.7k"
  },
  {
    id: 65,
    title: "Ethan",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/65.jpg",
    likes: "584.2k"
  },
  {
    id: 66,
    title: "Isabella",
    description: "Dancer and choreographer, expressing emotions through movement.",
    imageUrl: "/home/66.jpg",
    likes: "327.6k"
  },
  {
    id: 67,
    title: "Aiden",
    description: "Explorer and adventurer, always seeking new horizons.",
    imageUrl: "/home/67.jpg",
    likes: "682.6k"
  },
  {
    id: 68,
    title: "Avery",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/68.jpg",
    likes: "641.8k"
  },
  {
    id: 69,
    title: "Ella",
    description: "Art enthusiast and museum curator, preserving history one exhibit at a time.",
    imageUrl: "/home/69.jpg",
    likes: "416.7k"
  },
  {
    id: 70,
    title: "Jackson",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/70.jpg",
    likes: "813.0k"
  },
  {
    id: 71,
    title: "Lily",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/71.jpg",
    likes: "572.3k"
  },
  {
    id: 72,
    title: "Evelyn",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/72.jpg",
    likes: "374.8k"
  },
  {
    id: 73,
    title: "Carter",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/73.jpg",
    likes: "682.6k"
  },
  {
    id: 74,
    title: "Madison",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/74.jpg",
    likes: "426.1k"
  },
  {
    id: 75,
    title: "Mateo",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/75.jpg",
    likes: "519.7k"
  },
  {
    id: 76,
    title: "Penelope",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/76.jpg",
    likes: "584.2k"
  },
  {
    id: 77,
    title: "Wyatt",
    description: "Photographer and visual storyteller, capturing moments that last a lifetime.",
    imageUrl: "/home/77.jpg",
    likes: "327.6k"
  },
  {
    id: 78,
    title: "Maya",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/78.jpg",
    likes: "682.6k"
  },
  {
    id: 79,
    title: "Luke",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/79.jpg",
    likes: "426.1k"
  },
  {
    id: 80,
    title: "Harper",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/80.jpg",
    likes: "519.7k"
  },
  {
    id: 81,
    title: "Julian",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/81.jpg",
    likes: "584.2k"
  },
  {
    id: 82,
    title: "Nora",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/82.jpg",
    likes: "327.6k"
  },
  {
    id: 83,
    title: "Levi",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/83.jpg",
    likes: "682.6k"
  },
  {
    id: 84,
    title: "Hannah",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/84.jpg",
    likes: "426.1k"
  },
  {
    id: 85,
    title: "Henry",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/85.jpg",
    likes: "519.7k"
  },
  {
    id: 86,
    title: "Ellie",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/86.jpg",
    likes: "584.2k"
  },
  {
    id: 87,
    title: "Daniel",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/87.jpg",
    likes: "327.6k"
  },
  {
    id: 88,
    title: "Gabriel",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/88.jpg",
    likes: "682.6k"
  },
  {
    id: 89,
    title: "Luna",
    description: "Photographer and visual storyteller, capturing moments that last a lifetime.",
    imageUrl: "/home/89.jpg",
    likes: "426.1k"
  },
  {
    id: 90,
    title: "Ryan",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/90.jpg",
    likes: "519.7k"
  },
  {
    id: 91,
    title: "Owen",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/91.jpg",
    likes: "584.2k"
  },
  {
    id: 92,
    title: "Stella",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/92.jpg",
    likes: "327.6k"
  },
  {
    id: 93,
    title: "Andrew",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/93.jpg",
    likes: "682.6k"
  },
  {
    id: 94,
    title: "Sadie",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/94.jpg",
    likes: "426.1k"
  },
  {
    id: 95,
    title: "Caleb",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/95.jpg",
    likes: "519.7k"
  },
  {
    id: 96,
    title: "Violet",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/96.jpg",
    likes: "584.2k"
  },
  {
    id: 97,
    title: "Logan",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/97.jpg",
    likes: "327.6k"
  },
  {
    id: 98,
    title: "Sofia",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/98.jpg",
    likes: "682.6k"
  },
  {
    id: 99,
    title: "Isaac",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/99.jpg",
    likes: "426.1k"
  },
  {
    id: 100,
    title: "Skylar",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/100.jpg",
    likes: "519.7k"
  },
  {
    id: 101,
    title: "Zachary",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/101.jpg",
    likes: "584.2k"
  },
  {
    id: 102,
    title: "Nova",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/102.jpg",
    likes: "327.6k"
  },
  {
    id: 103,
    title: "Hunter",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/103.jpg",
    likes: "682.6k"
  },
  {
    id: 104,
    title: "Hailey",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/104.jpg",
    likes: "426.1k"
  },
  {
    id: 105,
    title: "Gavin",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/105.jpg",
    likes: "519.7k"
  },
  {
    id: 106,
    title: "Samantha",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/106.jpg",
    likes: "584.2k"
  },
  {
    id: 107,
    title: "Christopher",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/107.jpg",
    likes: "327.6k"
  },
  {
    id: 108,
    title: "Ivy",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/108.jpg",
    likes: "682.6k"
  },
  {
    id: 109,
    title: "Nolan",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/109.jpg",
    likes: "426.1k"
  },
  {
    id: 110,
    title: "Savannah",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/110.jpg",
    likes: "519.7k"
  },
  {
    id: 111,
    title: "Adrian",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/111.jpg",
    likes: "714.6k"
  },
  {
    id: 112,
    title: "Aria",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/112.jpg",
    likes: "732.4k"
  },
  {
    id: 113,
    title: "Grayson",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/113.jpg",
    likes: "619.8k"
  },
  {
    id: 114,
    title: "Leah",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/114.jpg",
    likes: "467.3k"
  },
  {
    id: 115,
    title: "Easton",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/115.jpg",
    likes: "573.6k"
  },
  {
    id: 116,
    title: "Zoe",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/116.jpg",
    likes: "854.2k"
  },
  {
    id: 117,
    title: "John",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/117.jpg",
    likes: "742.1k"
  },
  {
    id: 118,
    title: "Hazel",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/118.jpg",
    likes: "618.9k"
  },
  {
    id: 119,
    title: "Jaxon",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/119.jpg",
    likes: "527.4k"
  },
  {
    id: 120,
    title: "Sarah",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/120.jpg",
    likes: "689.3k"
  },
  {
    id: 121,
    title: "Leo",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/121.jpg",
    likes: "614.7k"
  },
  {
    id: 122,
    title: "Nova",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/122.jpg",
    likes: "793.2k"
  },
  {
    id: 123,
    title: "Adam",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/123.jpg",
    likes: "468.5k"
  },
  {
    id: 124,
    title: "Piper",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/124.jpg",
    likes: "527.9k"
  },
  {
    id: 125,
    title: "Ian",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/125.jpg",
    likes: "752.6k"
  },
  {
    id: 126,
    title: "Natalie",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/126.jpg",
    likes: "603.8k"
  },
  {
    id: 127,
    title: "Eli",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/127.jpg",
    likes: "684.7k"
  },
  {
    id: 128,
    title: "Vivian",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/128.jpg",
    likes: "527.2k"
  },
  {
    id: 129,
    title: "Aaron",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/129.jpg",
    likes: "616.4k"
  },
  {
    id: 130,
    title: "Bella",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/130.jpg",
    likes: "698.5k"
  },
  {
    id: 131,
    title: "Miles",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/131.jpg",
    likes: "572.9k"
  },
  {
    id: 132,
    title: "Layla",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/132.jpg",
    likes: "813.0k"
  },
  {
    id: 133,
    title: "Brayden",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/133.jpg",
    likes: "572.3k"
  },
  {
    id: 134,
    title: "Nora",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/134.jpg",
    likes: "374.8k"
  },
  {
    id: 135,
    title: "Evan",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/135.jpg",
    likes: "682.6k"
  },
  {
    id: 136,
    title: "Lucia",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/136.jpg",
    likes: "426.1k"
  },
  {
    id: 137,
    title: "Nathan",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/137.jpg",
    likes: "519.7k"
  },
  {
    id: 138,
    title: "Aurora",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/138.jpg",
    likes: "584.2k"
  },
  {
    id: 139,
    title: "Justin",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/139.jpg",
    likes: "327.6k"
  },
  {
    id: 140,
    title: "Aaliyah",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/140.jpg",
    likes: "682.6k"
  },
  {
    id: 141,
    title: "Sawyer",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/141.jpg",
    likes: "426.1k"
  },
  {
    id: 142,
    title: "Gabriella",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/142.jpg",
    likes: "519.7k"
  },
  {
    id: 143,
    title: "Daniel",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/143.jpg",
    likes: "584.2k"
  },
  {
    id: 144,
    title: "Ruby",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/144.jpg",
    likes: "327.6k"
  },
  {
    id: 145,
    title: "Asher",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/145.jpg",
    likes: "682.6k"
  },
  {
    id: 146,
    title: "Clara",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/146.jpg",
    likes: "426.1k"
  },
  {
    id: 147,
    title: "Levi",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/147.jpg",
    likes: "519.7k"
  },
  {
    id: 148,
    title: "Nova",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/148.jpg",
    likes: "584.2k"
  },
  {
    id: 149,
    title: "Henry",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/149.jpg",
    likes: "327.6k"
  },
  {
    id: 150,
    title: "Eleanor",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/150.jpg",
    likes: "682.6k"
  },
  {
    id: 151,
    title: "Christian",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/151.jpg",
    likes: "426.1k"
  },
  {
    id: 152,
    title: "Adeline",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/152.jpg",
    likes: "519.7k"
  },
  {
    id: 153,
    title: "Thomas",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/153.jpg",
    likes: "584.2k"
  },
  {
    id: 154,
    title: "Camila",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/154.jpg",
    likes: "327.6k"
  },
  {
    id: 155,
    title: "Oscar",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/155.jpg",
    likes: "682.6k"
  },
  {
    id: 156,
    title: "Aria",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/156.jpg",
    likes: "426.1k"
  },
  {
    id: 157,
    title: "Cora",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/157.jpg",
    likes: "519.7k"
  },
  {
    id: 158,
    title: "Josiah",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/158.jpg",
    likes: "584.2k"
  },
  {
    id: 159,
    title: "Fiona",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/159.jpg",
    likes: "327.6k"
  },
  {
    id: 160,
    title: "Hudson",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/160.jpg",
    likes: "682.6k"
  },
  {
    id: 161,
    title: "Elena",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/161.jpg",
    likes: "426.1k"
  },
  {
    id: 162,
    title: "Beckett",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/162.jpg",
    likes: "519.7k"
  },
  {
    id: 163,
    title: "Serenity",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/163.jpg",
    likes: "584.2k"
  },
  {
    id: 164,
    title: "Axel",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/164.jpg",
    likes: "327.6k"
  },
  {
    id: 165,
    title: "Madeline",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/165.jpg",
    likes: "682.6k"
  },
  {
    id: 166,
    title: "Jude",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/166.jpg",
    likes: "426.1k"
  },
  {
    id: 167,
    title: "Hazel",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/167.jpg",
    likes: "519.7k"
  },
  {
    id: 168,
    title: "Ezra",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/168.jpg",
    likes: "584.2k"
  },
  {
    id: 169,
    title: "Alice",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/169.jpg",
    likes: "327.6k"
  },
  {
    id: 170,
    title: "Xander",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/170.jpg",
    likes: "682.6k"
  },
  {
    id: 171,
    title: "Lydia",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/171.jpg",
    likes: "426.1k"
  },
  {
    id: 172,
    title: "Theodore",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/172.jpg",
    likes: "519.7k"
  },
  {
    id: 173,
    title: "Caleb",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/173.jpg",
    likes: "584.2k"
  },
  {
    id: 174,
    title: "Lila",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/174.jpg",
    likes: "327.6k"
  },
  {
    id: 175,
    title: "Patrick",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/175.jpg",
    likes: "682.6k"
  },
  {
    id: 176,
    title: "Ellie",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/176.jpg",
    likes: "426.1k"
  },
  {
    id: 177,
    title: "Violet",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/177.jpg",
    likes: "519.7k"
  },
  {
    id: 178,
    title: "Emmett",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/178.jpg",
    likes: "584.2k"
  },
  {
    id: 179,
    title: "Paisley",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/179.jpg",
    likes: "327.6k"
  },
  {
    id: 180,
    title: "Weston",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/180.jpg",
    likes: "682.6k"
  },
  {
    id: 181,
    title: "Elias",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/181.jpg",
    likes: "426.1k"
  },
  {
    id: 182,
    title: "Brielle",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/182.jpg",
    likes: "519.7k"
  },
  {
    id: 183,
    title: "Maddox",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/183.jpg",
    likes: "584.2k"
  },
  {
    id: 184,
    title: "Genevieve",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/184.jpg",
    likes: "327.6k"
  },
  {
    id: 185,
    title: "Arthur",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/185.jpg",
    likes: "682.6k"
  },
  {
    id: 186,
    title: "Rowan",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/186.jpg",
    likes: "426.1k"
  },
  {
    id: 187,
    title: "Anastasia",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/187.jpg",
    likes: "519.7k"
  },
  {
    id: 188,
    title: "Santiago",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/188.jpg",
    likes: "584.2k"
  },
  {
    id: 189,
    title: "Ada",
    description: "Book lover and literary critic, exploring worlds through the pages of a novel.",
    imageUrl: "/home/189.jpg",
    likes: "327.6k"
  },
  {
    id: 190,
    title: "Ezekiel",
    description: "Gardener and nature lover, cultivating beauty in every corner of life.",
    imageUrl: "/home/190.jpg",
    likes: "682.6k"
  },
  {
    id: 191,
    title: "Tessa",
    description: "Fitness enthusiast and personal trainer, sculpting bodies and minds.",
    imageUrl: "/home/191.jpg",
    likes: "426.1k"
  },
  {
    id: 192,
    title: "Kai",
    description: "Fashion designer with a flair for the dramatic, creating looks that turn heads.",
    imageUrl: "/home/192.jpg",
    likes: "519.7k"
  },
  {
    id: 193,
    title: "Matilda",
    description: "Chef and foodie, exploring flavors from around the world.",
    imageUrl: "/home/193.jpg",
    likes: "584.2k"
  },
  {
    id: 194,
    title: "Jasper",
    description: "Writer and poet, crafting verses that touch the heart.",
    imageUrl: "/home/194.jpg",
    likes: "327.6k"
  },
  {
    id: 195,
    title: "Isla",
    description: "Musician and songwriter, composing melodies that resonate with the soul.",
    imageUrl: "/home/195.jpg",
    likes: "682.6k"
  },
  {
    id: 196,
    title: "Rhett",
    description: "Artist and dreamer, painting the world with colors of imagination.",
    imageUrl: "/home/196.jpg",
    likes: "426.1k"
  },
  {
    id: 197,
    title: "Willow",
    description: "Nature lover and conservationist, protecting our planet one tree at a time.",
    imageUrl: "/home/197.jpg",
    likes: "519.7k"
  },
  {
    id: 198,
    title: "Gideon",
    description: "Graphic designer with an eye for detail and a passion for creativity.",
    imageUrl: "/home/198.jpg",
    likes: "584.2k"
  },
  {
    id: 199,
    title: "Penelope",
    description: "Entrepreneur and visionary, building the future one idea at a time.",
    imageUrl: "/home/199.jpg",
    likes: "327.6k"
  },
  {
    id: 200,
    title: "Brooks",
    description: "Animal rights activist and vegan chef, making the world a better place one meal at a time.",
    imageUrl: "/home/200.jpg",
    likes: "682.6k"
  }
          
    ]

    export async function GET(request: Request, context:any) {
        const {params} = context;
    return NextResponse.json({
        post: post.find((post:any) => post.id === Number(params.id)) || null,
    })

}