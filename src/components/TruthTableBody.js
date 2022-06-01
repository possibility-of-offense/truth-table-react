import "../styles/truth-table__body.css";
import React, { useEffect, useState } from "react";
import TruthTableHeader from "./TruthTableHeader";
import TruthTableRow from "./TruthTableRow";

export const MainExpressionContext = React.createContext();

export default function TruthTableBody({
  exercises,
  setResult,
  finishGame,
  setFinishGame,
}) {
  const [answers, setAnswers] = useState([]);
  const [alertOrSuccess, setAlertOrSuccess] = useState(null);

  const handleCheckAll = () => {
    if (answers.every((el) => el === true)) {
      setAlertOrSuccess("success");
      setResult((prev) => prev.concat(true));
    } else {
      setAlertOrSuccess("failure");
      setResult((prev) => prev.concat(false));
    }
    setFinishGame((prev) => prev.concat(exercises.id));
  };

  useEffect(() => {
    setAnswers([]);
    setAlertOrSuccess(null);
  }, [exercises]);

  return (
    <div className="truth-table__body">
      <div
        className={`${
          finishGame.includes(exercises.id) ? "disable-current-table" : ""
        }`}
      >
        <TruthTableHeader exercises={exercises} />

        <div className="body-wrapper">
          <MainExpressionContext.Provider value={exercises.main}>
            <TruthTableRow
              cb={setAnswers}
              ex={exercises}
              predicates={["T", "T"]}
            />
            <TruthTableRow
              cb={setAnswers}
              ex={exercises}
              predicates={["F", "F"]}
            />
            <TruthTableRow
              cb={setAnswers}
              ex={exercises}
              predicates={["T", "F"]}
            />
            <TruthTableRow
              cb={setAnswers}
              ex={exercises}
              predicates={["F", "T"]}
            />
          </MainExpressionContext.Provider>
        </div>
      </div>

      <div className="actions-output">
        {alertOrSuccess === "success" ? (
          <h4 className="check-all-answers success">Success</h4>
        ) : alertOrSuccess === "failure" ? (
          <h4 className="check-all-answers failure">Failure</h4>
        ) : (
          ""
        )}
        <button
          id="check-all"
          disabled={answers.length < 4}
          className={answers.length < 4 ? "disabled" : ""}
          onClick={handleCheckAll}
        >
          Check all
        </button>
      </div>
    </div>
  );
}
