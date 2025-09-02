import React, { useState } from "react";

export default function ForminputUsestate() {
  const [name, setname] = useState("");
  const [ischecked, setischecked] = useState(false);
  return (
    <div>
      <h2>controlled inputs</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="checkbox"
        checked={ischecked}
        onChange={(e) => setischecked(e.target.checked)}
      />
      <p>typed:{name}</p>
    </div>
  );
}
