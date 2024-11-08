
import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    answer: "Harper Lee",
  },
];

// Main QuizApp component for rendering and managing quiz functionality
const QuizApp = () => {
  // State to track the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to track the user's score
  const [score, setScore] = useState(0);
  // State to show feedback on answer correctness (e.g., "Correct!" or "Incorrect")
  const [feedback, setFeedback] = useState("");
  // State to determine if the quiz is finished
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Function to handle answer selection
  const handleAnswerSelection = (option: any) => {
    // Check if selected option is correct
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1); // Increment score if correct
      setFeedback("Correct! 🎉"); // Show positive feedback
    } else {
      setFeedback("Incorrect 😞"); // Show negative feedback if incorrect
    }

    // Reset feedback and move to the next question after a delay
    setTimeout(() => {
      setFeedback(""); // Clear feedback message
      // If there are more questions, move to the next; otherwise, finish the quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsQuizFinished(true); // Mark quiz as finished
      }
    }, 1000); // 1-second delay for feedback
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0); // Reset to first question
    setScore(0); // Reset score
    setFeedback(""); // Clear feedback
    setIsQuizFinished(false); // Mark quiz as not finished
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500 px-4 sm:px-8 py-6">
      {/* Main container for quiz with centered alignment and padding */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 sm:p-8 transition-all transform duration-300 ease-in-out hover:shadow-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Quiz App</h1>
        
        {/* Conditional rendering: show questions if quiz is not finished, otherwise show final score */}
        {!isQuizFinished ? (
          <>
            {/* Display current question number */}
            <div className="text-sm text-gray-500 font-medium mb-4 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            
            {/* Display current question text */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{questions[currentQuestion].question}</h2>
            </div>
            
            {/* Display answer options as buttons */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index} // Unique key for each option
                  onClick={() => handleAnswerSelection(option)} // Call function on selection
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out transform hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Display feedback (correct or incorrect) after answer selection */}
            {feedback && (
              <div className={`mt-4 text-lg font-medium ${feedback === "Correct! 🎉" ? "text-green-600" : "text-red-600"} transition duration-300 ease-in-out`}>
                {feedback}
              </div>
            )}
          </>
        ) : (
          // Final screen displayed when the quiz is finished
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Finished!</h2>
            <p className="text-lg text-gray-700 mb-6">Your score: {score} / {questions.length}</p>
            {/* Restart quiz button */}
            <button
              onClick={restartQuiz}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
