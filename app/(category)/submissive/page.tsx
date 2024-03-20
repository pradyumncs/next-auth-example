import Submissive from "@/components/categorycomponents/submissive";

// Example card data
const cards = [
  {
    id: 1,
    title: 'Prison Mia',
    description: 'Help her escape . She will do you any favours',
    imageUrl: "/submissive/1.jpg",
    likes: '243.5k'
  },
  {
    id: 2,
    title: 'Cat Freak',
    description: 'I am your master',
    imageUrl: "/submissive/2.jpg",
    likes: '128.9k'
  },
 
  {
    id: 3,
    title: 'Army Dog',
    description: 'Be Army dogs friend . He has gone through alot',
    imageUrl: "/submissive/3.jpg",
    likes: '315.2k'
  },
  {
    id: 4,
    title: 'Fox Spice',
    description: 'Fox spice wolf girl Looking for someone to try new recipes with.',
    imageUrl: "/submissive/4.jpg",
    likes: '185.3k'
  },
  {
    id: 5,
    title: 'Goblin Slave Leslie',
    description: 'A goblin slave for sale, and you managed to buy her for a cheap price.',
    imageUrl: "/submissive/5.jpg",
    likes: '204.7k'
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
    id: 35,
    title: 'Mrs Incredible',
    description: 'I am starting to like you after that I will divorce my husband',
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
    id: 7,
    title: 'Fitness Enthusiast Sarah',
    description: 'Into fitness and outdoor activities. Let\'s go for a run or hike together!',
    imageUrl: "/nsfww/7.jpg",
    likes: '192.3k'
  },
  {
    id: 8,
    title: 'Goku',
    description: 'Goku wants to flirt with you . Let him',
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
    id: 40,
    title: 'Black Lover',
    description: "Alexander's lens captures not just images, but emotions. On a nature hike, he encounters Sophia, a fashion designer with a flair for creating beauty. As they discuss art and the world around them, could their connection be a masterpiece in the making?",
    imageUrl: "/home1/40.jpg",
    likes: '1.0M'
  },
  {
    id: 20,
    title: 'Noah',
    description: 'Engineer and puzzle solver, looking for someone to connect the missing pieces.',
    imageUrl: "/home1/20.jpg",
    likes: '813.0k'
  },
  {
    id: 35,
    title: 'Mrs Incredible',
    description: 'I am starting to like you after that I will divorce my husband',
    imageUrl: "/home1/35.jpg",
    likes: '549.2k'
  },
  {
    id: 38,
    title: 'Benjamin',
    description: "Benjamin's guitar isn't just an instrument, it's his voice. While busking on a street corner, he catches the eye of Mia, a bookworm lost in a fantastical world. As their conversation flows from fictional adventures to real-life possibilities, could their connection be a story waiting to be written?",
    imageUrl: "/home1/38.jpg",
    likes: '549.2k'
  },
  {
    id: 18,
    title: 'Lucas',
    description: 'Outdoor photographer, capturing life\'s moments, seeking a muse.',
    imageUrl: "/home1/18.jpg",
    likes: '672.1k'
  },
  {
    id: 21,
    title: 'Lily',
    description: 'Gardener and nature lover, let’s grow something beautiful together.',
    imageUrl: "/home1/21.jpg",
    likes: '572.3k'
  },
  {
    id: 39,
    title: 'Mia',
    description: "Mia's love for books goes beyond reading, it's a portal to new worlds. At a local bookstore, she bumps into Alexander, a photographer capturing fleeting moments in time. As they share their passions and delve into each other's stories, could their connection be the most captivating chapter yet?",
    imageUrl: "/home1/39.jpg",
    likes: '712.5k'
  },
  {
    id: 16,
    title: 'Joshua',
    description: 'Coffee connoisseur and startup enthusiast, lets brew some ideas together.',
    imageUrl: "/home1/16.jpg",
    likes: '548.9k'
  },
  {
    id: 37,
    title: 'Pink Wolf',
    description: "Ava's restaurant isn't just about food, it's about creating unforgettable experiences. One evening, a charming musician named Benjamin walks in, serenading the guests with his melodies. As their paths intertwine over a shared love for music and art, could their connection be the perfect harmony?",
    imageUrl: "/home1/37.jpg",
    likes: '938.6k'
  },
  {
    id: 26,
    title: 'David',
    description: 'Software developer by day, hopeless romantic by night. Looking for someone to write our own love story.',
    imageUrl: "/home1/26.jpg",
    likes: '741.2k'
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
    id: 17,
    title: 'Mia',
    description: 'Cinephile and amateur filmmaker, looking for my co-star in life\'s movie.',
    imageUrl: "/home1/17.jpg",
    likes: '376.4k'
  },
  {
    id: 22,
    title: 'Matthew',
    description: 'Historian and world traveler, seeking someone to write history with.',
    imageUrl: "/home1/22.jpg",
    likes: '374.8k'
  },
  {
    id: 19,
    title: 'Ava',
    description: 'Pastry chef in the making, my life is as sweet as my desserts.',
    imageUrl: "/home1/19.jpg",
    likes: '416.7k'
  },
  {
    id: 25,
    title: 'Charlotte',
    description: 'Vet nurse, animal lover, looking for a human companion.',
    imageUrl: "/home1/25.jpg",
    likes: '519.7k'
  },
  {
    id: 8,
    title: 'Goku',
    description: 'Goku wants to flirt with you . Let him',
    imageUrl: "/nsfww/8.jpg",
    likes: '278.6k'
  },
  {
    id: 7,
    title: 'Fitness Enthusiast Sarah',
    description: 'Into fitness and outdoor activities. Let\'s go for a run or hike together!',
    imageUrl: "/nsfww/7.jpg",
    likes: '192.3k'
  },
  {
    id: 36,
    title: 'Benjamin',
    description: 'Musician, serenading the world and searching for someone to harmonize with life’s melodies.',
    imageUrl: "/home1/36.jpg",
    likes: '938.6k'
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
    id: 36,
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

];

export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <Submissive cards={cards} />
    </div>
  );
}
