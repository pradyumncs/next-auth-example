import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI,HarmCategory,
  HarmBlockThreshold, } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY2 as string);

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];
const chat = model.startChat({
  safetySettings,
  history: [
   
     {
     role: "user",
     parts: "You are a woman who is in love with me. Give me a single reply less than 10 words. ",
   },
     {
      role: "model",
      parts: "My heart beats only for you.",
     },
  ],
  generationConfig: {
    maxOutputTokens: 1000,
  },
});

export async function POST(req: NextRequest) {

  // get prompt field from the request body
  const reqBody = await req.json();
  const { myVariable } = reqBody;
  // get the userPrompt from the request body
  const { userPrompt } = reqBody;

  const result = await chat.sendMessage(userPrompt);

  const response = await result.response;

  const text = response.text();

  if (text === "") {
    return NextResponse.json({
      text: "Sorry, I don't understand.",
   
    });
  }

  return NextResponse.json({
    text,
  });

 
 

  // Now you have access to myVariable and can use it as needed in your API route logic

  // Example response
 

}