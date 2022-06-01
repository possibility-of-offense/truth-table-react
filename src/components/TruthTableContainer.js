import "../styles/truth-table__container.css";
import { useEffect, useMemo, useState } from "react";
import TruthTable from "./TruthTable";
import NavigationalButtons from "./NavigationalButtons";

const exercisesObject = [
  {
    id: 1,
    main: "F v G",
    elements: ["F", "G"],
    particles: ["F v G"],
  },
  {
    id: 2,
    main: "M ^ P",
    elements: ["M", "P"],
    particles: ["M ^ P"],
  },
  {
    id: 3,
    main: "G <=> D",
    elements: ["G", "D"],
    particles: ["G <=> D"],
  },
  // TODO
  // {
  //   id: 4,
  //   main: "(G ^ D) -> P",
  //   elements: ["G", "D", "P"],
  //   particles: ["G ^ D", " -> P"],
  // },
];

function App() {
  const [exercise, setExercise] = useState(() => exercisesObject[0]);
  const [exhaustedPrev, setExaustedPrev] = useState(true);
  const [exhaustedNext, setExaustedNext] = useState(false);
  const [finishGame, setFinishGame] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (finishGame.length === exercisesObject.length) {
      let out = result.every((res) => res === true);
      setTimeout(() => {
        alert(
          `You have finished the game ${out ? "successfully" : "with errors"}!`
        );
        window.location.reload();
      }, 1000);
    }
  }, [finishGame, result]);

  const lenOfExercises = useMemo(() => exercisesObject.length, []);

  function handleClick(v) {
    let ind = exercisesObject.findIndex((ex) => {
      if (ex.id === exercise.id) {
        return true;
      }
    });

    if (v === "next") {
      ind++;

      setExercise(exercisesObject[ind]);
      if (ind === lenOfExercises - 1) {
        setExaustedNext(true);
      }
      setExaustedPrev(false);
    } else if (v === "prev") {
      ind--;

      setExercise(exercisesObject[ind]);
      if (ind === 0) {
        setExaustedPrev(true);
      }
      setExaustedNext(false);
    }
  }

  return (
    <div className="truth-table__container">
      {lenOfExercises > 1 && (
        <NavigationalButtons
          prev={exhaustedPrev}
          next={exhaustedNext}
          handleClick={handleClick}
        />
      )}
      <TruthTable
        exercises={exercise}
        setResult={setResult}
        finishGame={finishGame}
        setFinishGame={setFinishGame}
      />
    </div>
  );
}

export default App;
