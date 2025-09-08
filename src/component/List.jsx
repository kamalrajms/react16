import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItems());
    console.log("updating items");
  }, [getItems]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
