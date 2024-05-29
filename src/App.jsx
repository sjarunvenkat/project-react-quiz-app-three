import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/quiz" element={<QuizComponent />}></Route>
        <Route path="/result" element={<ResultComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
