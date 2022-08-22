import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/base.scss";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
    <ToastContainer autoClose={8000} />
  </Router>
);
