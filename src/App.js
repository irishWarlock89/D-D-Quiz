import React from "react";
import { useState } from "react";
import { useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Context";

import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  function renderHandler() {
    if (gameState === "menu") {
      return <MainMenu />;
    } else if (gameState === "quiz") {
      return <Quiz />;
    } else if (gameState === "endScreen") {
      return <EndScreen />;
    }
  }

  return (
    <div className="App">
      <h1>D&D Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {renderHandler()}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
