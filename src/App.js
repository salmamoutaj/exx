import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import { quizzes } from "./Data/DataQuiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">Quiz App</h1>
        <nav className="quiz-nav">
          {quizzes.map((quiz) => (
            <Link key={quiz.id} to={`/quiz/${quiz.id}`} className="quiz-link">
              {quiz.name}
            </Link>
          ))}
        </nav>

        <Routes>
          {quizzes.map((quiz) => (
            <Route
              key={quiz.id}
              path={`/quiz/${quiz.id}`}
              element={<Quiz quiz={quiz.questions} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;