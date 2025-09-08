import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Head() {
  return (
    <nav className="head">
      <Link to={"/home"}>Home</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/service"}>Services</Link>
      <Link to={"/contact"}>contact</Link>
    </nav>
  );
}
