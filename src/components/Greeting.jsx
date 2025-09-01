import React from "react";
import "./Greeting.css";

export default function Greeting({ lastName, place }) {
  const name = "kishore";
  return (
    <>
      <div className="good">Good morning ....</div>
      <h1>
        Student: {name} {lastName} {place}
      </h1>
    </>
  );
}
