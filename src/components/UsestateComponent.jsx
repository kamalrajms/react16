import React, { useState } from "react";

export default function UsestateComponent() {
  const [count, setCount] = useState(100000);
  const [name, setname] = useState("praveen");
  const [loggedin, setLoggedin] = useState(false);
  const [dark, setdark] = useState(false);
  console.log(loggedin);

  console.log(name);
  const fruits = ["apple", "banana", "Mango"];

  const user = [
    { id: 1, name: "john" },
    { id: 2, name: "Emma" },
    { id: 3, name: "raj" },
  ];

  const student = ["alice", "raj", "kishore"];

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
      {/* logical operator */}
      {loggedin && <p>hello kishore</p>}

      {/* list rendering */}

      <ul>
        {fruits.map((e, ind) => (
          <li key={ind}>{e}</li>
        ))}
      </ul>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        {student.length > 0 ? (
          <ul>
            {student.map((name, ind) => (
              <li key={ind}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>no student is found</p>
        )}
      </div>
      {/* dark mode */}
      <div
        style={{
          backgroundColor: dark ? "#333" : "#fff",
          color: dark ? "#fff" : "#333",
          padding: "30px",
        }}
      >
        <button onClick={() => setdark(!dark)}>
          switch to {dark ? "dark" : "Light"}mode
        </button>
        <p>you are in {dark ? "Light" : "dark"}</p>
      </div>
    </div>
  );
}
