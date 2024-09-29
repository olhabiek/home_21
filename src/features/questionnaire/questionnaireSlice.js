import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Question 1?",
      options: ["Option 1", "Option 2"],
    },
    {
      id: 2,
      question: "Question 2?",
      options: ["Option 1", "Option 2"],
    },
    {
      id: 3,
      question: "Question 3?",
      options: ["Option 1", "Option 2"],
    },
    {
      id: 4,
      question: "Question 4?",
      options: ["Option 1", "Option 2"],
    },
    {
      id: 5,
      question: "Question 5?",
      options: ["Option 1", "Option 2"],
    },
  ],
  score: 0,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setAnswer(state, action) {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    calculateScore(state) {
      state.score = state.questions.filter(
        (q) => q.answer === "Option 1"
      ).length;
    },
  },
});

export const { setAnswer, calculateScore } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
