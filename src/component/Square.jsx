import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button style={{ padding: "20px" }} onClick={onSquareClick}>
      {value}
    </button>
  );
}
