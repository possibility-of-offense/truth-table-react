import { useContext } from "react";
import { CalculateAllColumnsContext } from "./TruthTable";
import { createMoreGridColumns } from "./helpers/calculateGridColumns";

export default function TruthTableHeader({ exercises }) {
  const calculateAllColumns = useContext(CalculateAllColumnsContext);

  return (
    <>
      <div
        className="header"
        style={{
          gridTemplateColumns: `20% 20% ${createMoreGridColumns(
            exercises,
            calculateAllColumns
          )}`,
        }}
      >
        {exercises.elements.map((ex) => {
          return <div key={ex}>{ex}</div>;
        })}

        {exercises.particles.map((p) => {
          return <div key={p}>{p}</div>;
        })}
      </div>
    </>
  );
}
