import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

async function checkAllModels() {
  const modelsToTry = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-1.5-pro",
    "gemini-1.5-pro-latest",
    "gemini-pro"
  ];

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      console.log(`Checking ${modelName}...`);
      await model.generateContent("test");
      console.log(`✅ SUCCESS: ${modelName} is working!`);
      return; // Stop after first success
    } catch (e) {
      console.log(`❌ FAILED: ${modelName} - ${e.message}`);
    }
  }
  console.log("\nNo models worked. Please ensure your API key has 'Generative Language API' enabled in Google Cloud Console.");
}

checkAllModels();
