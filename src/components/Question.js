import React from "react";
import { useDispatch } from "react-redux";
import { setAnswer } from "../features/questionnaire/questionnaireSlice";

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (event) => {
    dispatch(
      setAnswer({ questionId: question.id, answer: event.target.value })
    );
  };

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            value={option}
            name={`question-${question.id}`}
            onChange={handleAnswer}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Question;
