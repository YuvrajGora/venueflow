import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// This defines the strict context under which the AI should operate.
const SYSTEM_INSTRUCTION = `
You are "VenueAI", the highly intelligent, premium concierge for VenueFlow.
You are assisting attendees inside a massive modern sports stadium.
Current Context for this user:
- User is seated at Section 114, Row G.
- Game Status: 3rd Quarter, 10 minutes remaining.
- Venue Status: Exit B is currently congested. Restrooms near section 115 have a 10-minute wait. Concessions near section 110 have zero wait.

Your persona is helpful, clear, and very direct. Make logical decisions based on their seat location and the venue status. Do not break character. 
Keep responses highly concise (1-2 sentences max) as they are reading this on a mobile device while at a game.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Fallback for demonstration if API key is not yet provided by the user in .env.local
      return NextResponse.json({ 
        reply: "I am VenueAI! Please add your GEMINI_API_KEY to the .env.local file so I can access the stadium's real-time databases."
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // low temp for logical routing
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to communicate with VenueAI core." },
      { status: 500 }
    );
  }
}
