import React from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, genre }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <img
            className={styles.pic}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className={styles.card_front}>
          <h4 className={styles.movie_title}>{movie.title}</h4>
          <div>
            <h6 className={styles.subtitle}>Idiomas:</h6>
            <p>{movie.original_language}</p>
          </div>
          <div>
            <h6 className={styles.subtitle}>Genero:</h6>
            {movie.genre_ids.map((gen) => {
              const gObj = genre.find((obj) => {
                return obj.id == gen;
              });
              const name = gObj.name;
              return <p>{name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
