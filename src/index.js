import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import AppProvider from "./context/AppContext";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
