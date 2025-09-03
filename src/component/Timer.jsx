import React, { useState, useEffect } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handstart = () => {
    setIsrunning(true);
  };
  const handleStop = () => {
    setIsrunning(false);
  };
  const reset = () => {
    setIsrunning(false);
    setSec(0);
  };
  return (
    <div>
      <h1>Timer :{sec}</h1>
      <div>
        <button onClick={handstart}>Start</button>
        <br />
        <button onClick={handleStop}>Stop</button>
        <br />
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
