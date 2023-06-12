import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import { useMovies } from "../../hooks/useMovies";
import { get_search } from "../../API/movie-database";
const imgs = [
  "https://pbs.twimg.com/media/ECgcg2sXUAEtzZm.jpg",
  "https://thumbnails.production.thenounproject.com/smoWTGTjp6LhRWV1yGXt10BndS8=/fit-in/1000x1000/photos.production.thenounproject.com/photos/4203273F-EA61-43DD-AF3D-C23913741A94.jpg",
  "https://www.unimet.edu.ve/wp-content/uploads/2019/08/Derecho.jpg",
  "https://www.smart-pricer.com/wp-content/uploads/Full-cinema-02.jpg",
  "https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg",
];
export default function HomePage() {
  const {
    isLoading,
    movies,
    getMovies,
    genre,
    getGenre,
    upcoming,
    getUpcoming,
  } = useMovies();

  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!isLoading) {
      getMovies();
      getGenre();
      getUpcoming();
      getSearch();
    }
  }, [getMovies, getGenre, getUpcoming, getSearch, search]);

  async function getSearch(query) {
    const { data } = await get_search(query);
    setSearch(data.results);
    return search;
  }

  function result() {
    if (search.length != 0) {
      return <h1>{`Resultados para ${input}`}</h1>;
    } else {
      return <></>;
    }
  }

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
      <div className={styles.search_bar}>
        <SearchBar
          id="busqueda"
          type="text"
          placeholder="Nombre..."
          label="Ingrese el nombre de la pelicula"
          className={styles.search}
          setInput={setInput}
        />
        <Button
          display="Buscar"
          action={() => {
            getSearch(input);
          }}
        />

        <div className={styles.movie_container}>
          {console.log(search.length != 0)}
          {result()}
          <div className={styles.movie_show}>
            {search.map((movie) => (
              <MovieCard movie={movie} genre={genre} />
            ))}
          </div>
        </div>
        <div className={styles.movie_container}>
          <h2>En Cartelera</h2>
          <div className={styles.movie_show}>
            {movies.map((movie) => (
              <MovieCard movie={movie} genre={genre} />
            ))}
          </div>
        </div>

        <div className={styles.movie_container}>
          <h2>Proximamente</h2>
          <div className={styles.movie_show}>
            {upcoming.map((up) => (
              <MovieCard movie={up} genre={genre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
