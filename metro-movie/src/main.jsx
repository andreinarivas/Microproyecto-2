import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ReservePage from "./pages/ReservePage/ReservePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import MovieInfo from "./pages/MovieInfoPage/MovieInfo";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomePage />} path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reserve" element={<PrivateRoute> <ReservePage /> </PrivateRoute>}/>
          <Route path="/admin" element={<AdminPage />} />
          <Route path = "/movie" element = {<PrivateRoute> <MovieInfo/> </PrivateRoute>}/>
          <Route path = "/profile" element = {<PrivateRoute> <ProfilePage/> </PrivateRoute>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
