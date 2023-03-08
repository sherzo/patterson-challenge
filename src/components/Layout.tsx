import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
