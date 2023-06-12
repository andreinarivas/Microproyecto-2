import React, { useState, useEffect, useCallback } from "react";
import styles from "./ProfilePage.module.css";
import { useUserContext } from "../../contexts/UserContext";
import MovieFav from "../../components/MovieFav/MovieFav";

export default function ProfilePage() {
  const { user } = useUserContext();

  useEffect(() => {}, []);

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Bienvenido, {user.name}</h1>
      <h2 className={styles.movies}>Tus Películas Favoritas</h2>
      <div className={styles.movie_show}>
        {user.favorites.map((movie) => (
          <MovieFav movie={movie} />
        ))}
      </div>
    </div>
  );
}
