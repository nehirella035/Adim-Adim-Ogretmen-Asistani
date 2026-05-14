import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

async function listAllAvailableModels() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.VITE_GEMINI_API_KEY}`);
    const data = await response.json();
    
    if (data.models) {
      console.log("Available models for your key:");
      data.models.forEach(m => console.log(`- ${m.name}`));
    } else {
      console.log("No models returned. Response:", JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error("Error listing models:", e.message);
  }
}

listAllAvailableModels();
