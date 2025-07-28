import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run(image) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Analise a imagem do cardápio fornecida. Para cada item listado, extraia o nome, uma descrição concisa e o preço. Crie um objeto JSON para cada item no formato {'name': 'Nome do Item', 'description': 'Breve descrição do item', 'price': 00.00}. Priorize a precisão dos dados, especialmente para nomes e preços. Se a descrição for ambígua ou inexistente, use uma string vazia. Se o preço não for legível, use 0.00. depois colque todos os objetos em uma lista";

  const imageParts = [
    fileToGenerativePart("image1.png", "image/png"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.json();
  console.log(text);
  return text
}

export default run