import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Chart as ChartJS } from "chart.js/auto";
import Home from "./components/Home";
import "./css/sb-admin-2.min.css";
// import "./vendor/fontawesome-free/css/all.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
