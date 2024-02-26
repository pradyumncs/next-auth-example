import Carduno from "@/components/carduno";

// Example card data
const cards = [
  {
    id: 1,
    title: 'Card Title 14asas',
    description: 'This is a description for card 1.This is a description for card 1.This is a description for card 1.',
    imageUrl: '/1.png',
    likes: 12000,
    comments: 230 // Replace with your actual image path
  },
  {
    id: 2,
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
    imageUrl: '/2.png', // Replace with your actual image path
    likes: 12000,
    comments: 230
  },
  {
    id: 3,
    title: 'Card Title 14asas',
    description: 'This is a description for card 1.',
    imageUrl: '/1.png',
    likes: 12000,
    comments: 230 // Replace with your actual image path
  },
  {
    id: 4,
    title: 'Card Title 2sasassassasasasas',
    description: 'This is a description for card 2.',
    imageUrl: '/2.png', // Replace with your actual image path
    likes: 12000,
    comments: 230
  },
  {
    id: 5,
    title: 'Card Title 14asas',
    description: 'This is a description for card 1.',
    imageUrl: '/1.png',
    likes: 12000,
    comments: 230 // Replace with your actual image path
  },
  {
    id: 6,
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
    imageUrl: '/2.png', // Replace with your actual image path
    likes: 12000,
    comments: 230
  },
  // ... more card data
];

export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <Carduno cards={cards} />
    </div>
  );
}
