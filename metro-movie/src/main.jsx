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
<<<<<<< HEAD
>>>>>>> 66cf18da47c778d36bd6dc3b75fbe3bf982aa7d0
=======
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
>>>>>>> 314d99b6374338a5f459cfbe5d6e5d24f7143d4b

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
<<<<<<< HEAD
          <Route element={<HomePage />} path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
          <Route path="/movieinfo" element = {<MovieInfo/>}/>
=======
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/admin" element={<AdminPage />} />
>>>>>>> 66cf18da47c778d36bd6dc3b75fbe3bf982aa7d0
=======
          <Route element={<HomePage />} path={HOME_URL} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={RESERVE_URL()} element={<PrivateRoute> <ReservePage /></PrivateRoute>} />
          <Route path={ADMIN_URL} element={<AdminPage />} />
          <Route path={MOVIE_DETAIL_URL()} element={<PrivateRoute> <MovieInfo/> </PrivateRoute>} />
          <Route path={PROFILE_URL} element={<PrivateRoute> <ProfilePage/> </PrivateRoute>} />

>>>>>>> 314d99b6374338a5f459cfbe5d6e5d24f7143d4b
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
