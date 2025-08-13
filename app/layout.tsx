import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
<<<<<<< HEAD

=======
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Sidebar } from "@/components/sidebar"
>>>>>>> e1fb5b68ef663ba3c727449c342d1c375dac6245


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Writoma",
  description:
    "Writoma converts your AI-generated content into fully humanized, undetectable writing",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
<<<<<<< HEAD
    <html>
      <body className={inter.className}>
        <div className="flex h-full min-h-screen w-full flex-col justify-between">
         
          <main className="w-full flex-auto py-4 md:py-6">
            {children}
          </main>
      
        </div>
      </body>
=======
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
>>>>>>> e1fb5b68ef663ba3c727449c342d1c375dac6245
    </html>
  )
}
