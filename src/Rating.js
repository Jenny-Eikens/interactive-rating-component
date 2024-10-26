import React from "react";

export default function Rating({ activeButton, onRatingSelect }) {
  function handleClick(number) {
    onRatingSelect(number);
  }

  return (
    <div className="rating-buttons">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={activeButton === number ? "rating clicked" : "rating"}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
const numbers = [1, 2, 3, 4, 5];
