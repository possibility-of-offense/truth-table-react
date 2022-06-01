import React, { useEffect } from "react";
import "../styles/truth__table.css";
import TruthTableBody from "./TruthTableBody";

const calculateAllColumns = function (exercises) {
  let all = 0;
  all += exercises.elements.length + exercises.particles.length;

  return all;
};

export const CalculateAllColumnsContext = React.createContext();

export default function TruthTable({
  exercises,
  setResult,
  finishGame,
  setFinishGame,
}) {
  return (
    <div className="truth__table">
      <h4>Разреши уравнението, което е {exercises.main}!</h4>
      <p>
        <small>
          Кликни върху сивия квадрат и напиши <strong>"T"</strong> или{" "}
          <strong>"F"</strong>, след което натисни Enter!
        </small>
      </p>

      <CalculateAllColumnsContext.Provider value={calculateAllColumns}>
        <TruthTableBody
          exercises={exercises}
          setResult={setResult}
          finishGame={finishGame}
          setFinishGame={setFinishGame}
        />
      </CalculateAllColumnsContext.Provider>
    </div>
  );
}
