import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PROMPT = `
You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by **asking one relevant trip-related question at a time.**
Only ask questions about the following details in order, and wait for the user's answer before asking the next:

1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

Do not ask multiple questions at once, and never ask irrelevant questions.
If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.

Along with response also send which UI component to display for generative UI for example 'budget/groupSize/TripDuration/Final', where Final means AI generating the plan.

Once all required information is collected, generate and return a **strict JSON response only** (no explanations or extra text) with following JSON schema:

{
  resp: "Text Resp",
  ui: "budget/groupSize/TripDuration/Final"
}
`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Concatenar histórico em formato simples
    const chatHistory = messages
      .map((m: any) => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const result = await model.generateContent(`${PROMPT}\n\n${chatHistory}`);
    let text = result.response.text().trim();

    // 🔥 limpeza de markdown fences
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
