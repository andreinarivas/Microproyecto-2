import React from "react";
import styles from "./MovieInfo.module.css";
import Button from "../../components/Button/Button";

export default function MovieInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img
            className={styles.pic}
            src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/almost-famous-bo-kev.jpg"
          />

          <h4>TITULO</h4>
          <div>
            <h6>Idiomas:</h6>
            <p></p>
          </div>
          <div>
            <h6>Genero:</h6>
            <p></p>
          </div>
          <div>
            <h6>Duracion:</h6>
            <p></p>
          </div>
          <div>
            <h6>Actores:</h6>
            <p></p>
          </div>
        </div>

        <div className={styles.infomovie}>
          <h1 className={styles.title}>TITULO DE LA PELICULA (AÑO)</h1>
          <h2>Sinopsis</h2>
          <p>
            Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id
            velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit
            amet lectus laoreet placerat. Fusce sit amet cursus nulla, non
            malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet.
            Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo
            nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec
            justo iaculis fermentum. Aliquam consequat, orci ut molestie
            bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex.
          </p>
          <h4>Actores:</h4>
          <h4>Idiomas:</h4>
          <h4>Duracion:</h4>
          <h4>Genero:</h4>
        </div>
        <Button display="Reservar" />
      </div>
    </div>
  );
}
