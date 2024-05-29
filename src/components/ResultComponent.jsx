import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questionsData from "../../resources/quizQuestion.json";

export default function ResultComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const userAnswers = location.state?.userAnswers || {};

  const calculateScore = () => {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questionsData.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.answer) {
        score += 1;
        correctAnswers += 1;
      } else if (userAnswer) {
        wrongAnswers += 1;
      }
    });

    return {
      score,
      correctAnswers,
      wrongAnswers,
    };
  };

  const { score, correctAnswers, wrongAnswers } = calculateScore();

  const restartQuiz = () => {
    navigate("/quiz");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="heading">Result</h1>
      <div className="resultBoard">
        <h4>You need more practice</h4>
        <h1>Your Score is {(score / questionsData.length) * 100}%</h1>
        <p className="summary">
          No of questions <span className="nos">{questionsData.length}</span>
        </p>
        <p className="summary">
          No of attempted questions{" "}
          <span className="nos">{correctAnswers + wrongAnswers}</span>
        </p>
        <p className="summary">
          No of correct questions <span className="nos">{correctAnswers}</span>
        </p>
        <p className="summary">
          No of wrong questions <span className="nos">{wrongAnswers}</span>
        </p>
      </div>
      <div className="navigation-result">
        <button className="playAgain" onClick={restartQuiz}>
          Play Again
        </button>
        <button className="homeBtn" onClick={goToHome}>
          Home
        </button>
      </div>
    </>
  );
}
