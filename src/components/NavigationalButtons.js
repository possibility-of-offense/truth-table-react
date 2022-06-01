import "../styles/navigational__buttons.css";

export default function NavigationalButtons({ prev, next, handleClick }) {
  return (
    <div className="navigational__buttons">
      <button
        onClick={() => handleClick("prev")}
        className={`${prev ? "disable" : ""}`}
      >
        Назад
      </button>
      <button
        onClick={() => handleClick("next")}
        className={`${next ? "disable" : ""}`}
      >
        Напред
      </button>
    </div>
  );
}
