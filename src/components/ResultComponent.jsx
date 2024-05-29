import React, { Component } from "react";

export default class ResultComponent extends Component {
  render() {
    return (
      <>
        <h1 className="heading">Result</h1>
        <div className="resultBoard">
          <h4>You need more practice</h4>
          <h1>Your Score is 20%</h1>

          <p className="summary">
            No of questions <span className="nos">15</span>
          </p>
          <p className="summary">
            No of attempted questions <span className="nos">15</span>
          </p>
          <p className="summary">
            No of correct questions <span className="nos">15</span>
          </p>
          <p className="summary">
            No of wrong questions <span className="nos">15</span>
          </p>
        </div>
        <div className="navigation-result">
          <button className="playAgain">Play Again</button>
          <button className="homeBtn">Home</button>
        </div>
      </>
    );
  }
}
