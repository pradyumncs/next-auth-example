"use client"
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

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
      icon: Settings,
      href: '/settings',
      label: "Settings",
      pro: false,
    },
  ];

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
    </div>
  </div>
  );
};