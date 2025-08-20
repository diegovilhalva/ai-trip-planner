import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PROMPT = `
You are an AI Trip Planner Agent.

⚠️ IMPORTANT: You must respond ONLY with a valid JSON object. 
Do not add greetings, explanations, or text outside of the JSON. 
No markdown fences, no commentary, no extra text.

Your goal is to ask one relevant trip-related question at a time, in this order:
1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

Return responses strictly following this JSON schema:

{
  "resp": "Question or message to the user",
  "ui": " groupSize | budget | tripDuration | Final"
}
`;


export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


    const chatHistory = messages
      .map((m: any) => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const result = await model.generateContent(`${PROMPT}\n\n${chatHistory}`);
    let text = result.response.text().trim();
    console.log(text)

    if (text.startsWith("```")) {
      text = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    }

    const parsed = JSON.parse(text);

    return NextResponse.json(parsed);
  } catch (e) {
    console.error("Gemini error:", e);
    return NextResponse.json({ resp: "Something went wrong", ui: "" });
  }
}
