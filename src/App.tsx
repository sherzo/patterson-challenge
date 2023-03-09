import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/main.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
