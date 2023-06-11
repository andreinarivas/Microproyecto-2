import React from "react";
import styles from "./MovieInfo.module.css";
import Button from "../../components/Button/Button";
import FavIcon from "../../components/FavIcon/FavIcon";

export default function MovieInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.pic_container}>
            <img
              className={styles.pic}
              src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/almost-famous-bo-kev.jpg"
            />
          </div>

          <div className={styles.infomovie}>
            <div className={styles.title_container}>
              <h1 className={styles.title}>TITULO DE LA PELICULA</h1>
              <FavIcon />
            </div>
            <h2>(AÑO)</h2>
            <h3>Sinopsis</h3>
            <p>
              Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus
              id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit
              sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non
              malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet.
              Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo
              nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec
              justo iaculis fermentum. Aliquam consequat, orci ut molestie
              bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae
              ex.
            </p>
            <h4>Actores:</h4>
            <h4>Idiomas:</h4>
            <h4>Duracion:</h4>
            <h4>Genero:</h4>
          </div>
        </div>
        <Button display="Reservar" />
      </div>
    </div>
  );
}
