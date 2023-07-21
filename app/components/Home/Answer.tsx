"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Props {
  answers: string[];
  questionId: string;
}

const Answer = ({ answers, questionId }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [data, setData] = useState<{
    correct: string;
    random: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      if (selected) {
        setLoading(true);
        try {
          const response = await fetch(`/api/quiz/answer/${questionId}`);
          const data = await response.json();
          setLoading(false);
          if (subscribed) {
            setData(data);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      console.log("canceled");
      subscribed = false;
    };
  }, [questionId, selected]);

  const prefixes = ["A", "B", "C", "D"];

  return (
    <div className="flex flex-col justify-center">
      {answers?.map((answer: string, index: number) => {
        // const isLoading = selected === answer && loading;
        const isWrong =
          selected === answer && data && data?.correct !== selected;
        const isCorrect = data?.correct === answer;
        const prefix = prefixes[index];
        return (
          <div key={answer} className="mt-5 w-full px-6">
            <button
              className={`text-start px-6 py-2 w-full bg-white font-medium text-fuchsia-950 rounded-lg ${
                isCorrect && "bg-green-500 text-fuchsia-100 "
              } ${isWrong && "bg-red-500 text-fuchsia-100"}`}
              onClick={() => setSelected(answer)}
            >
              <span className=" bg-rose-600 px-3 py-1 rounded-full text-white">
                {prefix}
              </span>
              {"    "}
              {answer} {isCorrect} {isWrong}
            </button>
          </div>
        );
      })}
      {data?.random && (
        <Link className="ml-6 mt-5 text-white" href={`/quiz/${data.random}`}>
          Do it again
        </Link>
      )}
      <Link className="text-white  mx-6" href={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default Answer;
