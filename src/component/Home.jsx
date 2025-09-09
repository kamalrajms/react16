import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const page = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => page("/service")}>service</button>
    </div>
  );
}
