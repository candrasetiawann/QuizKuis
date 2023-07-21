import { endpoint } from "@/app/utils/endpoint";
import Answer from "@/app/components/Home/Answer";

async function getQuizQuestion(id: string) {
  const response = await fetch(`${endpoint}/quiz/${id}`);
  const json = response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return json;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { question } = await getQuizQuestion(params.id);

  return (
    <div className="flex flex-col bg-gradient-to-b from-indigo-950 to-fuchsia-950 min-h-screen">
      <h1 className="text-white font-medium text-center bg-rose-600 px-5 py-3 mx-6 rounded-lg mt-4">
        {question.question}
      </h1>
      <Answer answers={question.answers} questionId={params.id} />
    </div>
  );
}
