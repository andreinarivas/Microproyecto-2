import React from "react";
import styles from "./HomePage.module.css";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import MovieCard from "../../components/MovieCard/MovieCard";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
const imgs = [
  "https://pbs.twimg.com/media/ECgcg2sXUAEtzZm.jpg",
  "https://thumbnails.production.thenounproject.com/smoWTGTjp6LhRWV1yGXt10BndS8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/4203273F-EA61-43DD-AF3D-C23913741A94.jpg",
  "https://www.unimet.edu.ve/wp-content/uploads/2019/08/Derecho.jpg",
  "https://www.smart-pricer.com/wp-content/uploads/Full-cinema-02.jpg",
  "https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg",
];
export default function HomePage() {
  return (
    <div className={styles.main}>
      <Carousel>
        {imgs.map((img) => {
          return (
            <CarouselItem>
              <div className={styles.pic_container}>
                <img className={styles.pic} src={img} />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
      <div>
        <Input
          id="busqueda"
          type="text"
          placeholder="Nombre..."
          label="Ingrese el nombre de la pelicula"
        />
        <Button display="Buscar" />
      </div>

      <div className={styles.movie_container}>
        <h2>En Cartelera</h2>
        <div className={styles.movie_show}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
