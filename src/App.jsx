import React, { useContext, createContext } from "react";
import First from "./component/First";

export const Pass = createContext();

export default function App() {
  const num = "number";
  return (
    <div>
      <Pass.Provider value={num}>
        <First />
      </Pass.Provider>
    </div>
  );
}
