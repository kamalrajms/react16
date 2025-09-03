import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [sec, setsec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setsec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>Second :{sec}</h2>
      {/* <button onClick={()=>clearInterval(in)}></button> */}
    </div>
  );
}
