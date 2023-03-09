import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/main.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
