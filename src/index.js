import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom/client'
import App from "./App.jsx";

// Rendering App component to the DOM
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
