"use client"
import * as React from "react";
import { useRouter } from 'next/navigation'
import {  Card, CardHeader, CardTitle, CardDescription, CardContent} from "./ui/card";
// Adjust the import path to your actual Card components
interface CardItem {
    id: number;
    title: string;
    description: string;
  }
const Carduno: React.FC = () => {
    const router = useRouter();

  const data: CardItem[] = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
     
    },
    {
        id: 2,
        title: 'Card Title 1',
        description: 'This is a description for card 1.',
      },
    // Add more items as needed
  ];

  const handleCardClick = (id: number) => {
    // Use the useRouter hook to navigate
    router.push(`/detail/${id}`);
  };


  return (
    <div>
      {data.map((item) => (
        <div key={item.id} onClick={() => handleCardClick(item.id)} className="cursor-pointer">
          <Card className="m-4">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* You can add more content here */}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Carduno;
