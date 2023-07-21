import quiz from "@/app/data/quiz.json";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const random = Math.floor(Math.random() * quiz.data.length);
    return NextResponse.json({ randomQuiz: quiz.data[random].id });
  } catch (error) {
    return new NextResponse("Internal server error");
  }
}

//
