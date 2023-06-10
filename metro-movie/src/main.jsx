import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
<<<<<<< HEAD
import MovieInfo from "./pages/MovieInfoPage/MovieInfo";
=======
import ReservePage from "./pages/ReservePage/ReservePage";
import AdminPage from "./pages/AdminPage/AdminPage";
>>>>>>> 66cf18da47c778d36bd6dc3b75fbe3bf982aa7d0

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomePage />} path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
          <Route path="/movieinfo" element = {<MovieInfo/>}/>
=======
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/admin" element={<AdminPage />} />
>>>>>>> 66cf18da47c778d36bd6dc3b75fbe3bf982aa7d0
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
