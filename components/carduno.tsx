"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

// Assume this is the structure of your card data
interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  likes: string;
 
}

// Modify your Carduno component to accept props
const Carduno: React.FC<{ cards: CardItem[] }> = ({ cards }) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
    <style jsx global>{`
  .gradient-border {
    border: solid 1px transparent;
    border-radius: 8px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #33ccff, #ff33cc);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .card-zoom:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  
`}</style>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item.id)} className="cursor-pointer">
           <Card className="card-zoom rounded overflow-hidden shadow-lg w-full max-w-full gradient-border card-zoom">
           <div className="transition-transform duration-300 hover:scale-105">
  <Image 
    src={item.imageUrl} 
    alt="Card image" 
    width={350} 
    height={350} 
   
  
  />
</div>
              <CardHeader>
                <CardTitle style={{ fontSize: '16px' }}>{truncateText(item.title, 15)}</CardTitle>
                <CardDescription>{truncateText(item.description, 25)}</CardDescription>
              </CardHeader>
             
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};


export default Carduno;
