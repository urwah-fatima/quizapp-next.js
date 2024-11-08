'use client'
import QuizApp from "./components/Quiz";

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-fuchsia-900 via-violet-950 p-4">
  <QuizApp />
</div>
  );
}
