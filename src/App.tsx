import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router";
import { store } from "./redux/store";
import "./styles/main.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
