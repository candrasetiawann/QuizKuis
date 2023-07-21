import { NextRequest, NextResponse } from "next/server";
import quiz from "@/app/data/quiz.json";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const question = quiz.data.find((item) => item.id === params.id);
//     if (!question) {
//       return NextResponse.json({ status: 404 });
//     }

//     const { correct_answer, ...rest } = question;
//     return NextResponse.json({ question: rest });
//   } catch (error) {
//     return NextResponse.json({ status: 500 });
//   }
// }

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const question = quiz.data.find((item) => item.id === params.id);
    if (!question) {
      return NextResponse.json({ status: 404 });
    }
    const { correct_answer, ...rest } = question;
    return NextResponse.json({ question: rest });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
