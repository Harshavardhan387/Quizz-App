import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState(true);

  const questions = [
    {
      text: "Which of the following are the advantages of React.js?",
      options: [
        {
          id: 0,
          text: "React.js can increase the application's performance with Virtual DOM.",
          isCorrect: false,
        },
        {
          id: 1,
          text: "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "React.js can render both on client and server side.",
          isCorrect: false,
        },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "What of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original DOM", isCorrect: false },
        { id: 1, text: "Virtual DOM", isCorrect: true },
        { id: 2, text: "Both A and B.", isCorrect: false },
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
    {
      text: "Which of the following acts as the input of a class-based component?",
      options: [
        { id: 0, text: "Class", isCorrect: false },
        { id: 1, text: "Factory", isCorrect: false },
        { id: 2, text: "Render", isCorrect: false },
        { id: 3, text: "Props", isCorrect: true },
      ],
    },
    {
      text: "Which of the following keyword is used to create a class inheritance?",
      options: [
        { id: 0, text: "Create", isCorrect: false },
        { id: 1, text: "Inherits", isCorrect: false },
        { id: 2, text: "Extends", isCorrect: true },
        { id: 3, text: "This", isCorrect: false },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage.", isCorrect: false },
        { id: 1, text: "Internal storage of the component.", isCorrect: true },
        { id: 2, text: "External storage of the component.", isCorrect: false },
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setColor(color);
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {

      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>ReactJS Quizz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quizz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div
          className={
            "question-card " +
            (color ? "question-card-true" : "question-card-false")
          }
        >
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
