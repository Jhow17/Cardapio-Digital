import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(`CHANE DA API: ${genAI}`)
function fileToGenerativePart(file, mimeType) {
  return {
    inlineData: {
      data: file.toString("base64"),
      mimeType
    },
  };
}

async function run(file, mimeType) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Analise a imagem do cardápio fornecida. Para cada item listado, extraia o nome, uma descrição concisa e o preço. Crie um objeto JSON para cada item no formato {'nome': 'Nome do Item', 'descricao': 'Breve descrição do Item', 'preco': 00.00}. Priorize a precisão dos dados, especialmente para nomes e preços. Se a descrição for ambígua ou inexistente, use uma string vazia. Se o preço não for legível, use 0.00. Não inclua texto introdutório na resposta. Apenas retorne a lista de objetos JSON.";

  const imageParts = [
    fileToGenerativePart(file, mimeType),
  ];
  try {
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    let text = response.text();
    

    console.log("bruta da API:", text);
    
    console.log("bruta da API:", genAI);
    
    const codeBlockRegex = /```json\s*([\s\S]*?)\s*```/;
    const match = text.match(codeBlockRegex);
// se tem o match pega o segundo item do array devolvido por ele que normalmente é a expressao processada
//["Capítulo 3.4.5.1","Capítulo 3.4.5.1",".1",index: 33,input: "Para maiores informações, veja o Capítulo 3.4.5.1"]
    if (match && match[1]) {
       
        text = match[1].trim();
        console.log("JSON extraído do bloco de código:", text);
    } else {

        text = text.trim();
        console.log("JSON assumido como puro:", text);
    }
  

    const parsedJson = JSON.parse(text); 
    return parsedJson;

  } catch (e) {
    console.error('Erro na Api:', e.message);
    console.log("bruta da API:", genAI);
    throw new Error('Falha ao processar a imagem com a API Gemini.');
  }
}

export default run;