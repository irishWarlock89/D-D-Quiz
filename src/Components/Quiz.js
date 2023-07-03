import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import Questions from "../Helpers/QuestionBank";
import clsx from "clsx";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(null);

  function nextQuestion() {
    if (optionChosen == null) {
      alert("Please choose an option");
      return;
    }

    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen(null);
  }
  function finishQuiz() {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }
    setGameState("endScreen");
  }
  

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="Options">
        {Questions[currentQuestion].options.map((option, index) => (
          <button
            key={option}
            className={clsx(optionChosen === index && "selected")}
            onClick={() => setOptionChosen(index)}
          >
            {option}
          </button>
        ))}
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
