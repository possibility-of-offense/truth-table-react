import "../styles/truth-table__row.css";
import { useEffect, useState, useContext } from "react";
import { CalculateAllColumnsContext } from "./TruthTable";
import { checkResult } from "./helpers/evaluateTrueOrFalse";
import { getOperator } from "./helpers/getOperator";
import { MainExpressionContext } from "./TruthTableBody";

export default function TruthTableRowAlt(props) {
  const [output, setOutput] = useState("");
  const [finalResult, setFinalResult] = useState(false);

  // const calculateAllColumns = useContext(CalculateAllColumnsContext);

  // function createMoreGridColumns() {
  //   let out = "";

  //   for (let i = 0; i < calculateAllColumns(props.exercises) - 2; i++) {
  //     out += `1fr `;
  //   }
  //   return out;
  // }

  // createMoreGridColumns();

  useEffect(() => {
    setOutput("");
    setFinalResult(false);
  }, [props.ex]);

  const mainExpression = useContext(MainExpressionContext);

  function handleKeyDown(e) {
    const operator = getOperator(mainExpression);

    if (e.key === "Enter") {
      const out = checkResult(props.predicates, operator);
      switch (output) {
        case "T":
          if (out) {
            props.cb((prev) => prev.concat(true));
          } else {
            props.cb((prev) => prev.concat(false));
          }
          break;
        case "F":
          if (out) {
            props.cb((prev) => prev.concat(false));
          } else {
            props.cb((prev) => prev.concat(true));
          }
          break;
      }
      setFinalResult(true);
    }
  }

  return (
    <div
      className="truth-table__row"
      // style={{ gridTemplateColumns: `20% 20% ${createMoreGridColumns()}` }}
    >
      <div>
        <p>{props.predicates[0]}</p>
      </div>
      <div>
        <p>{props.predicates[1]}</p>
      </div>
      <div className="input-div">
        {!finalResult ? (
          <input
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          output
        )}
        <br />
      </div>
    </div>
  );
}
