"use client"

import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react"
import styles from "@/styles/root.module.css"
import React from 'react';
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners"

interface ChatbotProps {
  imageUrl: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ imageUrl }) => {

  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        // Logic to send the message goes here
        console.log(inputValue); // Example action

        // Clear the input field
        setInputValue('');
    };

  const chatContainerRef = useRef(null);

  const getDate = () => {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  const [chatHistory, setChatHistory] = useState([
    { id: 1, message: 'Hello', sender: 'model', time: getDate() },
  ])

  const onPromptChange = (e: any) => {
    localStorage.setItem('prompt', e.target.value)
    setPrompt(e.target.value)
  }

  const RequestGemini = async (prompt: any) => {

    const response = await fetch('/api/googleapi', {
      method: 'POST',
      body: JSON.stringify({ userPrompt: prompt }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { id: prevChatHistory.length + 1, message: data.text, sender: 'model', time: getDate() }
    ]);

    setLoading(false)

   

  }

  const deleteChatHistory = () => {
    localStorage.removeItem('chatHistory')
    setChatHistory([])
  }

  // Scroll to the bottom whenever chatHistory changes
  useEffect(() => {
    // @ts-ignore
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatHistory]);


  useEffect(() => {
    const handleUnload = (event: BeforeUnloadEvent) => {
      deleteChatHistory(); // Delete the chat history when the page is about to be unloaded
    };

    window.addEventListener('beforeunload', handleUnload);

    // Clean up the event listener to prevent memory leaks
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);
  // handle click
  const onHandleClick = async () => {
    setLoading(true)
    if (prompt == "") {
      toast.error("Please enter the prompt")
      
      return
    }

    
    setLoading(true);

    setPrompt("")

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { id: prevChatHistory.length + 1, message: prompt, sender: 'user', time: getDate() }
    ]);

    await RequestGemini(prompt)
  
    setLoading(false);

  }

  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      onHandleClick()
    }
  }

  // show welcome message
  useEffect(() => {
    const visited = localStorage.getItem('visited')
    if (visited) {
      toast.success("Welcome to NSFWAICHAT")
      setTimeout(() => {
        toast.success("Get started by entering your message")
      }, 2500)
      localStorage.setItem('visited', "true")
    }
  }, []) // Empty dependency array to run the effect only once
  

  useEffect(() => {
    const chatHistory = localStorage.getItem('chatHistory')
    if (chatHistory) {
      setChatHistory(() => JSON.parse(chatHistory))
      console.log(chatHistory)
    }
  }, [])

  return (
    <main className={styles.container}>
      <Toaster />
      <Link href="/">
        <div className="flex gap-2 items-center font-bold">
          <Image src={imageUrl} alt="logo" width={35} height={35} />
          <h1 className="text-2xl">Chat With Me</h1>
        </div>
      </Link>
    
      <div className={`flex flex-col mt-2 ${styles.chatHistory}`} ref={chatContainerRef}>
        {chatHistory.length > 0 && chatHistory.map((chat) => (
          <div key={chat.id} className="mb-5 relative">
            <div className={`p-2 rounded-xl ${chat.sender == "user" ? styles.user : styles.model}`}>
              <div className={styles.icons}>
                <Image src={chat.sender == "user" ? "/user.svg" : imageUrl} alt="logo" width={30} height={30}  className={chat.sender !== "user" ? styles.roundImage : ""} />
              </div>
              <Markdown className="mt-2">
                {chat.message}
              </Markdown>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex justify-center items-center gap-5 ${styles.inputContainer}`}>
        <div className="relative">
          <input 
          type="text" 
          placeholder="Enter Your Message" value={prompt} className={`${styles.input}`} onChange={onPromptChange} onKeyDown={handleSubmit}/>
          <Image src="/clean.png" alt="logo" width={35} height={35} className="absolute bottom-0.5 right-7 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" onClick={deleteChatHistory}/>
        </div>
        {loading ? (
          <button className={styles.buttonloading} disabled>
            <BeatLoader color="white" size={8} />
          </button>
        ) : (
          <button className={styles.button} onClick={onHandleClick}>
   <Image src="/whats.png" alt="logo" width={30} height={30}  />
</button>
        )}
      </div>
    </main>
  )
}
export default Chatbot;