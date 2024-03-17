"use client"
import { Home, Plus, Settings , CreditCard,  Flame} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import {  Trophy, Star } from "lucide-react";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string) => {
    return router.push(url);
  };
  const routes = [
    {
      icon: Home,
      href: '/',
      label: "Home",
      pro: false,
    },
    {
      icon: Plus,
      href: '/companion/new',
      label: "Create",
      pro: true,
    },
   
    {
      icon:  CreditCard ,
      href: '/membership',
      label: "Membership",
      pro: false,
    },
    
  ];

  const Explore = [
    {
      href: "/nsfww",
      label: "NSFW", // Consider using a more suggestive emoji if appropriate
      emoji: "🔥", // Adjust emoji if needed
    },
    {
      "href": "/female",
      "label": "Female",
      "emoji": "👩"
    },
    {
      "href": "/fictional",
      "label": "Fictional",
      "emoji": "📚"
    },
    {
      "href": "/dominant",
      "label": "Dominant",
      "emoji": "👑"
    },
    {
      "href": "/oc",
      "label": "Original Character (OC)",
      "emoji": "🎨"
    },
    {
      "href": "/submissive",
      "label": "Submissive",
      "emoji": "🙇"
    },
    {
      "href": "/male",
      "label": "Male",
      "emoji": "👨"
    },
    {
      "href": "/scenario",
      "label": "Scenario",
      "emoji": "🎭"
    },
    {
      "href": "/non-human",
      "label": "Non-human",
      "emoji": "👽"
    },
    {
      "href": "/anime",
      "label": "Anime",
      "emoji": "👁️‍🗨️"
    },
    
    {
      "href": "/game",
      "label": "Game",
      "emoji": "🎮"
    },
    {
      "href": "/monster-girl",
      "label": "Monster Girl",
      "emoji": "👾👧"
    },
    {
      "href": "/rpg",
      "label": "RPG",
      "emoji": "🎲"
    },
    
    {
      "href": "/straight",
      "label": "Straight",
      "emoji": "👫"
    },
   
    {
      "href": "/alien",
      "label": "Alien",
      "emoji": "👽"
    },
  
    {
      "href": "/hentai",
      "label": "Hentai",
      "emoji": "🔞"
    },
   
    {
      "href": "/movie",
      "label": "Movie",
      "emoji": "🎬"
    },
   
    {
      "href": "/lesbian",
      "label": "Lesbian",
      "emoji": "👭"
    },
   
    
    

  ]

  

  const textStyle = { fontWeight: 'semibold', color: 'black' , fontSize:13 };

  
  return (
    <div className="flex flex-col h-full text-primary bg-secondary" style={{ width: '250px', overflowY: 'auto', paddingLeft: '10px', paddingRight: '10px' }}>
    <div className="flex-1 flex flex-col pb-4">
      {routes.map((route) => (
        <div
          onClick={() => onNavigate(route.href)}
          key={route.href}
          className={cn(
            "flex p-3 justify-start items-center font-medium cursor-pointer rounded-lg transition w-full",
            pathname === route.href ? "bg-[#6366f1] hover:opacity-75" : "bg-secondary hover:bg-primary/10",
            "hover:text-white"
          )}
          style={{
            ...textStyle,
            color: pathname === route.href ? 'white' : 'black', // Conditionally change text color
            fontSize: pathname === route.href ? textStyle.fontSize : '13px', // Ensure fontSize is consistent
          }}
        >
          <route.icon className="h-5 w-5 mr-2" style={{ color: pathname === route.href ? "white" : "currentColor" }} />
          {route.label}
          
        </div>
      ))}
       <Separator className="mt-5 mb-5" />
       <div className="m-3 font-bold text-xs md:text-base">Explore</div>


       {Explore.map((item) => (
       <div
       onClick={() => onNavigate(item.href)}
       key={item.href}
       className={cn(
         "flex p-3 justify-start items-center font-medium cursor-pointer rounded-lg transition w-full",
         pathname === item.href ? "bg-[#6366f1] hover:opacity-75" : "bg-secondary hover:bg-primary/10",
         "hover:text-white"
       )}
       style={{
         ...textStyle,
         color: pathname === item.href ? "white" : "black",
         fontSize: pathname === item.href ? textStyle.fontSize : "13px",
       }}
     >
       <span className="mr-2" style={{ fontSize: 18 }}>{item.emoji}</span>
       {item.label}
     </div>
   ))}
 </div>
</div>


  );
};
