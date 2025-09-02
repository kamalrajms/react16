import React, { useState, useEffect } from "react";

export default function UseeffectHook() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);

  useEffect(() => {
    console.log(`count chaged to : ${count}`);
  }, [count]);
  return (
    <div>
      <h1>hello {count}</h1>
      <button onClick={() => setcount(count + 1)}>insrement</button>
    </div>
  );
}
