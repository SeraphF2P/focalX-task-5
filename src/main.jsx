import "./index.css";

import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/700.css"; // Specify weight

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const routers = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
