import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DragDropProvider } from "./provider/DragDropProvider";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DragDropProvider>
    <App />
  </DragDropProvider>
);
