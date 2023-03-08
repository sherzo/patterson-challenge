import { Layout } from "./components/Layout";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { CartPage } from "./pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
