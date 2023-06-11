import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { MOVIE_DETAIL_URL } from "../../constants/URLS";

export default function MovieCard({ movie, genre }) {
  const genres = movie.genre_ids.map((g) => {
    const gOb = genre.find(({ id }) => id === g);
    return gOb;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <img
            className={styles.pic}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <Link to={MOVIE_DETAIL_URL(movie.id)} className={styles.link}>
          <div className={styles.card_front}>
            <h4 className={styles.movie_title}>{movie.title}</h4>
            <div>
              <h6 className={styles.subtitle}>Idiomas:</h6>
              <p>{movie.original_language}</p>
            </div>
            <div>
              <h6 className={styles.subtitle}>Genero:</h6>
              {genres.map((g) => {
                return <p>{g.name}</p>;
              })}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
