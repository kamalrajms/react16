import React, { useState, useReducer } from "react";

export default function App() {
  // const [count, setcount] = useState(0);

  const intialvalue = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, intialvalue);
  return (
    <div>
      {/* <h2>count :{count}</h2>
      <button onClick={() => setcount(count + 1)}>inc</button>
      <br />
      <button onClick={() => setcount(count - 1)}>dec</button>
      <br />
      <button onClick={() => setcount(0)}>rest</button> */}
      <h2>count :{state.count}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <br />
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>rest</button>
    </div>
  );
}
