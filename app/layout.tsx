import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Sidebar } from "@/components/sidebar"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
    <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
    
      <div className="flex flex-1 w-full">
        {/* Sidebar: Fixed and shown on larger screens */}
        <aside className="hidden md:block md:w-64 lg:w-80 xl:w-96 h-full fixed">
          <Sidebar />
        </aside>
    
        {/* Main content: Adjust padding to account for the fixed sidebar */}
        <main className="flex-auto w-full md:pl-64 lg:pl-80 xl:pl-96 px-4 py-6 mx-auto max-w-7xl">
          {children}
        </main>
      </div>
    
      <Footer />
    </body>
    </html>
  )
}
