import React, { useState } from "react";
import questionsData from "../../resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

export default function QuizComponent() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(userAnswers[currentQuestionIndex - 1] || "");
    }
  };

  const handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");
    if (confirmQuit) {
      navigate("/");
    }
  };

  const handleFinish = () => {
    navigate("/result", { state: { userAnswers } });
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <>
      <div className="QuizPage">
        <h1>Question</h1>
        <div className="question-container">
          <div className="question-count">
            <span>
              {currentQuestionIndex + 1} of {questionsData.length}
            </span>
          </div>
          <h4>{currentQuestion.question}</h4>
          <ul className="choice">
            <li
              className={`choice-btn ${
                selectedOption === "optionA" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("optionA")}
              style={{
                backgroundColor: selectedOption === "optionA" ? "green" : "",
              }}
            >
              {currentQuestion.optionA}
            </li>
            <li
              className={`choice-btn ${
                selectedOption === "optionB" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("optionB")}
              style={{
                backgroundColor: selectedOption === "optionB" ? "green" : "",
              }}
            >
              {currentQuestion.optionB}
            </li>
            <li
              className={`choice-btn ${
                selectedOption === "optionC" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("optionC")}
              style={{
                backgroundColor: selectedOption === "optionC" ? "green" : "",
              }}
            >
              {currentQuestion.optionC}
            </li>
            <li
              className={`choice-btn ${
                selectedOption === "optionD" ? "selected" : ""
              }`}
              onClick={() => handleOptionClick("optionD")}
              style={{
                backgroundColor: selectedOption === "optionD" ? "green" : "",
              }}
            >
              {currentQuestion.optionD}
            </li>
          </ul>
          <div className="navigation">
            <button id="prev" onClick={handlePrevious}>
              Previous
            </button>
            <button id="next" onClick={handleNext}>
              Next
            </button>
            <button id="finish" onClick={handleFinish}>
              Finish
            </button>
            <button id="quit" onClick={handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
