import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "QuizKuix",
  description: "QuizKuis Quiz App ",
  authors: {
    name: "Candra Setiawan",
  },
  openGraph: {
    description: "QuizKuis Quiz App ",
    title: "QuizKuis Quiz App ",
    url: "quizkuis.vercel.app",
    type: "website",
  },
};

const MPlus = localFont({
  src: [
    {
      path: "./assets/fonts/MPLUSRounded1c-Regular.ttf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./assets/fonts/MPLUSRounded1c-Medium.ttf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "./assets/fonts/MPLUSRounded1c-Bold.ttf",
      weight: "700",
      style: "Bold",
    },
    {
      path: "./assets/fonts/MPLUSRounded1c-ExtraBold.ttf",
      weight: "800",
      style: "ExtraBold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MPlus.className}>
        <div className="bg-gradient-to-b from-red-600 to-rose-800 relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
