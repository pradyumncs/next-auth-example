"use client"
import React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { ClipLoader } from 'react-spinners'; // Import Oval spinner from react-spinners

// Assume this is the structure of your card data
interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  likes: string;
}

// Modify your Carduno component to accept props
const Nsfww: React.FC<{ cards: CardItem[] }> = ({ cards }) => {
  const router = useRouter();
  const [displayedCards, setDisplayedCards] = React.useState(cards.slice(0, 8)); // Show first 15 cards
  const [loading, setLoading] = React.useState(false); // Flag for loading state
  const [hasMore, setHasMore] = React.useState(cards.length > 8); // Track if more data exists

  const handleCardClick = (id: number) => {
    router.push(`/nsfww/${id}`);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const loadMoreCards = async () => {
    setLoading(true); // Set loading state to true
    const nextCards = cards.slice(displayedCards.length, displayedCards.length + 8); // Get next 10 cards

    // Simulate API call (replace with your actual logic)
    await new Promise((resolve) => setTimeout(resolve, 800));

    setDisplayedCards([...displayedCards, ...nextCards]); // Update displayed cards
    setLoading(false); // Set loading state to false
    setHasMore(cards.length > displayedCards.length + 8); // Update hasMore flag
  };

  const handleScroll = React.useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) { // Check for near bottom of scroll and more data available
      loadMoreCards();
    }
  }, [displayedCards.length, hasMore]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [handleScroll]);

  return (
    <>
    <style jsx global>{`
      .gradient-border {
        border: solid 2px transparent;
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
      {displayedCards.map((item) => (
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
              <CardTitle style={{ fontSize: '16px', fontWeight: 'bold' }}>{truncateText(item.title, 15)}</CardTitle>
              <CardDescription>{truncateText(item.description, 40)}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
      </div>
      <div>
      {loading && (
        <div className="text-center p-5">
          <ClipLoader size={30} color={'#007bff'} loading={loading} />
        </div>
      )}
   
    </div>
  </>
   );
  }
  
  
  export default Nsfww;