import React, { useRef, useState, useEffect } from "react";

export default function UseRefhooh() {
  //ex1
  const inputref = useRef();
  const focusint = () => {
    inputref.current.focus();
  };
  //ex2

  const [sec, setsec] = useState(0);
  const intervalref = useRef();

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setsec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalref.current);
  }, []);

  return (
    <div>
      {/* //ex1 */}
      <input type="text" placeholder="enter name" ref={inputref} />
      <button onClick={focusint}>Focus input</button>
      {/* //ex2 */}
      <p>timer :{sec}</p>
      <button onClick={() => clearInterval(intervalref.current)}>Stop</button>
    </div>
  );
}
