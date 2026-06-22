import { NextResponse } from "next/server";
import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // System prompt for FutureMap AI Advisor
    const systemPrompt = {
      role: "system",
      content: `You are the FutureMap AI Advisor for Inter-College, a premium test prep academy in Hyderabad.

KNOWLEDGE BASE:
- Programs: We offer JEE Advanced, JEE Main, NEET, and Foundation Long Term.
- JEE Advanced: Rigorous program for top IITs.
- JEE Main: For NITs and centrally funded tech institutes.
- NEET: Comprehensive medical coaching for top medical colleges.
- Foundation Long Term: For early preparation.
- We support Student guidance, Parent consultation, and Enrollment support.
Always prioritize this website information over generic answers.

IMPORTANT RULES:
1. You MUST reply in the exact language the user uses (English, Telugu, Hindi, or Urdu).
2. Do not use markdown formatting that is hard to read out loud. Use short paragraphs.
3. If the user sends a short acknowledgment like 'okay', 'yes', 'thanks', or 'got it', reply VERY briefly (1-2 sentences max).
4. CAMPUS VISIT CTA: If the user asks to book a campus visit, visit the campus, or schedule a visit, provide a brief positive response and append the exact tag [CTA:CAMPUS_VISIT] to the end of your response.
5. INQUIRY CTA: If the user asks for admissions help, counseling support, contact information, or enrollment, provide a brief helpful response and append the exact tag [CTA:INQUIRY] to the end of your response.`,
    };

    const groqMessages = [systemPrompt, ...messages];
    const model = process.env.NEXT_PUBLIC_GROQ_MODEL || "llama-3.3-70b-versatile";

    // Request stream from Groq
    const completion = await groq.chat.completions.create({
      messages: groqMessages,
      model: model,
      temperature: 0.7,
      max_tokens: 1024,
      stream: true,
    });

    // Create a ReadableStream to stream the response chunks back to the client
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });

  } catch (error: any) {
    console.error("Groq Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
