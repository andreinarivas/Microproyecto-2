import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomePage />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
