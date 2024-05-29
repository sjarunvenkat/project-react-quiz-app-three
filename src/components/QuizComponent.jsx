import React, { Component } from "react";
import questionsData from "../../resources/quizQuestion.json";
import { Link } from "react-router-dom";

export default class QuizComponent extends Component {
  state = {
    questions: questionsData,
    currentQuestionIndex: 0,
  };

  handlePrevious = () => {
    const { currentQuestionIndex } = this.state;
    const { questions } = this.state;
    const newIndex = currentQuestionIndex > 0 ? currentQuestionIndex - 1 : 0;
    this.setState({ currentQuestionIndex: newIndex });
  };

  handleNext = () => {
    const { currentQuestionIndex } = this.state;
    const { questions } = this.state;
    const newIndex =
      currentQuestionIndex < questions.length - 1
        ? currentQuestionIndex + 1
        : questions.length - 1;
    this.setState({ currentQuestionIndex: newIndex });
  };

  handleQuit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit ?");
  };

  render() {
    const { questions, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <>
        <div className="QuizPage">
          <h1>Question</h1>
          <div className="question-container">
            <div className="question-count">
              <span>{currentQuestionIndex + 1} of 15</span>
            </div>
            <h4>{currentQuestion.question}</h4>
            <ul className="choice">
              <li className="choice-btn">
                <input
                  type="radio"
                  id="optionA"
                  name="answer"
                  value="optionA"
                />
                <label htmlFor="optionA">{currentQuestion.optionA}</label>
              </li>
              <li className="choice-btn">
                <input
                  type="radio"
                  id="optionB"
                  name="answer"
                  value="optionB"
                />
                <label htmlFor="optionB">{currentQuestion.optionB}</label>
              </li>
              <li className="choice-btn">
                <input
                  type="radio"
                  id="optionC"
                  name="answer"
                  value="optionC"
                />
                <label htmlFor="optionC">{currentQuestion.optionC}</label>
              </li>
              <li className="choice-btn">
                <input
                  type="radio"
                  id="optionD"
                  name="answer"
                  value="optionD"
                />
                <label htmlFor="optionD">{currentQuestion.optionD}</label>
              </li>
            </ul>

            <div className="navigation">
              <button id="prev" onClick={this.handlePrevious}>
                Previous
              </button>
              <button id="next" onClick={this.handleNext}>
                Next
              </button>
              <button id="quit" onClick={this.handleQuit}>
                Quit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
