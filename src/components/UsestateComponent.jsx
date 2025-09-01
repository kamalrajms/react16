import React, { useState } from "react";

export default function UsestateComponent() {
  const [count, setCount] = useState(100000);
  const [name, setname] = useState("praveen");
  const [loggedin, setLoggedin] = useState(false);
  //   const [dark, setdark] = useState(false);
  console.log(loggedin);

  console.log(name);

  return (
    <div>
      {/* //count */}
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(count - 1)}>DEctement</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      {/* input fied example */}
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
      />

      {/* ternary operator */}
      {loggedin ? <h2>welcome back</h2> : <h2> please login,...</h2>}
      <button onClick={() => setLoggedin(!loggedin)}>
        {loggedin ? <>sign out</> : <>sign in</>}
      </button>
    </div>
  );
}
