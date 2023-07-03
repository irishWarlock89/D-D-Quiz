import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import Questions from "../Helpers/QuestionBank";
import "../App.css";

function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);

function restartQuiz() {
    setScore(0);
    setGameState("menu");
}

  return <div className="EndScreen">
        <h1>Quiz Finished!</h1>
        <h3>Your Score: {score} / {Questions.length}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
  </div>;
}

export default EndScreen;
