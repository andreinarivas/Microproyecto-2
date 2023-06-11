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
import {
  ADMIN_URL,
  HOME_URL,
  LOGIN_URL,
  MOVIE_DETAIL_URL,
  PROFILE_URL,
  REGISTER_URL,
  RESERVE_URL,
} from "./constants/URLS";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomePage />} path={HOME_URL} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={RESERVE_URL()} element={<PrivateRoute> <ReservePage /></PrivateRoute>} />
          <Route path={ADMIN_URL} element={<AdminPage />} />
          <Route path={MOVIE_DETAIL_URL()} element={<PrivateRoute> <MovieInfo/> </PrivateRoute>} />
          <Route path={PROFILE_URL} element={<PrivateRoute> <ProfilePage/> </PrivateRoute>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
