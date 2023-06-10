import React from "react";
import styles from "./MovieCard.module.css";

export default function MovieCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_back}>
          <img
            className={styles.pic}
            src="https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"
          />
        </div>
        <div className={styles.card_front}>
          <h4>TITULO</h4>
          <div>
            <h6>Idiomas:</h6>
            <p></p>
          </div>
          <div>
            <h6>Genero:</h6>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
