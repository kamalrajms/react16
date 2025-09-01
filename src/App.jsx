import React from "react";
import Gree from "./components/Greeting";
import Hello from "./components/Hello";
import UsestateComponent from "./components/UsestateComponent";

export default function App() {
  ///logical think
  const name2 = "Mohan";
  const place = "chennai";

  return (
    <div>
      <h1 style={{ color: "red" }}>react js</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos natus
        temporibus dolores repudiandae, rerum ducimus accusantium perspiciatis
        voluptates culpa, exercitationem omnis. Error exercitationem nemo quis
        ullam voluptatibus, vel eaque.
      </p>
      <Gree lastName={name2} place={place} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        inventore provident minus soluta est dignissimos culpa? Enim eligendi ad
        qui consectetur libero velit, vitae recusandae et, pariatur aut fugiat
        temporibus?
      </p>
      <Hello />
      <UsestateComponent />
    </div>
  );
}
