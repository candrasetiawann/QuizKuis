import quiz from "@/app/data/quiz.json";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const question = quiz.data.find((item) => item.id !== params.id);
//     if (!question) {
//       return NextResponse.json({ error: "error" });
//     }

//     const { correct_answer } = question;
//     const filteredQuestion = quiz.data.filter((item) => item.id !== params.id);
//     console.log(filteredQuestion);

//     const random = Math.floor(Math.random() * filteredQuestion.length);
//     console.log("random answer id : ", random);

//     return NextResponse.json({
//       correct: correct_answer,
//       random: filteredQuestion[random].id,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: "error" });
//   }
// }

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const question = quiz.data.find((item) => item.id === params.id);
    console.log(question);
    if (!question) {
      return NextResponse.json({ status: 404 });
    }

    const { correct_answer } = question;
    const filteredQuestion = quiz.data.filter((item) => item.id !== params.id);

    console.log(filteredQuestion);

    const random = Math.floor(Math.random() * filteredQuestion.length);
    console.log("random answer id : ", random);

    return NextResponse.json({
      correct: correct_answer,
      random: filteredQuestion[random].id,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
