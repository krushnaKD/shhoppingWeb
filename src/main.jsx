import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Contex from "./utils/Contex.jsx";

createRoot(document.getElementById("root")).render(
  <Contex>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Contex>
);
