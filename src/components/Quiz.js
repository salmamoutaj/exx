import React, { useState } from "react";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.length).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswer = (index, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = answerIndex;
    setAnswers(newAnswers);
  };

  const validateQuiz = () => {
    let correctAnswers = 0;
    quiz.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {quiz.map((question, index) => (
        <div key={index} className="question-block">
          <h3>{question.question}</h3>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  onChange={() => handleAnswer(index, optionIndex)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button className="validate-btn" onClick={validateQuiz}>
        Validate
      </button>
      {score !== null && (
        <div className="score">Your score: {score}/{quiz.length}</div>
      )}
    </div>
  );
};

export default Quiz;