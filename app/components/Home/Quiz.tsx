import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "@/public/img/icon.png";
import { endpoint } from "@/app/utils/endpoint";

export async function getRandomQuiz() {
  const response = await fetch(`${endpoint}/quiz/random`, {
    cache: "no-store",
  });
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
}

const Quiz = async () => {
  const data = await getRandomQuiz();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-14 text-yellow-500 font-black">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          LET'S GO
        </h1>
        <Image
          className="mt-20"
          src={icon}
          width={300}
          height={300}
          alt="icon"
        />
        <Link
          className="text-white mt-14 text-xl bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg px-6 py-2 rounded-full font-medium"
          href={`/quiz/${data.randomQuiz}`}
        >
          Start Playing
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
