import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="Home">
      <h1>Quiz App</h1>
      <button onClick={startQuiz}>Play</button>
    </div>
  );
}
