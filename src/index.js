import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  
]);

root.render(<RouterProvider router={appRouter} />);
