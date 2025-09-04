import React, { useContext } from "react";
import { Pass } from "../App";

export default function Third() {
  const Passname = useContext(Pass);
  return <div>Third component --{Passname}</div>;
}
