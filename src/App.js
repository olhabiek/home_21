import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { calculateScore } from "./features/questionnaire/questionnaireSlice";

function App() {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(calculateScore());
  };

  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <Result />
    </div>
  );
}

export default App;
