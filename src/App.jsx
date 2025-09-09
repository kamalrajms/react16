import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Head from "./component/Head";
import Web from "./component/Web";
import Appdevelopment from "./component/Appdevelopment";
import BlogDetail from "./component/BlogDetail";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/service" element={<Service />}>
            <Route path="" element={<Web />} />
            <Route path="App" element={<Appdevelopment />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/BlogDetail/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
