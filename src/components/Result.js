import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score);
  return <h1>Your Score: {score}</h1>;
};

export default Result;
