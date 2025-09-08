import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      Service
      <Link to={""}>Web</Link>
      <Link to={"App"}>App</Link>
      <Outlet />
      {/* <Outlet /> --important */}
    </div>
  );
}
