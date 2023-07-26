import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { StateProvider } from "./context/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <AppRouter />
    </StateProvider>
  </React.StrictMode>
);
