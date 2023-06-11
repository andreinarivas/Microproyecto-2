import React from "react";
import styles from "./ReservaCard.module.css";

export default function ReservaCard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cedula</h1>
      <div className={styles.movie_details}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"
          className={styles.pic}
        />
        <div className={styles.movie_info}>
          <h4>peli</h4>
          <p>otros detalles</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.details_li}>
          <h5>Entradas Reservadas</h5>
          <p>5</p>
        </div>
        <div className={styles.details_li}>
          <h5>Monto</h5>
          <p>5000</p>
        </div>
        <div className={styles.details_li}>
          <h5>Nombre</h5>
          <p>Andreina</p>
        </div>
      </div>
    </div>
  );
}
