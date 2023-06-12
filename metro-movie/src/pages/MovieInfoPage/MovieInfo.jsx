import React, { useEffect, useState } from "react";
import styles from "./MovieInfo.module.css";
import Button from "../../components/Button/Button";
import FavIcon from "../../components/FavIcon/FavIcon";
import { useMovies } from "../../hooks/useMovies";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { RESERVE_URL } from "../../constants/URLS";

export default function MovieInfo() {
  const { movieid } = useParams();
  const { isLoading, movie, getMovie, actors, getActors } = useMovies();
  const [fav, setFavorite] = useState(false);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (user.favorites.some((f) => movieid == f.id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && movieid) {
      getMovie(movieid);
      getActors(movieid);
    }
  }, [getMovie]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!isLoading && !movie) {
    return (
      <div>
        <h1>NO SE PUDO HALLAR LA INFORMACION</h1>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.pic_container}>
              <img
                className={styles.pic}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>

            <div className={styles.infomovie}>
              <div className={styles.title_container}>
                <h1 className={styles.title}>{movie.title}</h1>
                <FavIcon fav={fav} setFav={setFavorite} movie={movie} />
              </div>
              <h2>{movie.release_date}</h2>
              <h3>Sinopsis</h3>
              <p>{movie.overview}</p>
              <div className={styles.movie_detail}>
                <div className={styles.detail_container}>
                  <h4>Actores:</h4>
                  {actors.slice(0, 4).map((a) => {
                    return <p>{a.name}</p>;
                  })}
                </div>
                <div className={styles.detail_container}>
                  <h4>Idiomas:</h4>
                  {movie.spoken_languages.map((lan) => {
                    return <p>{lan.english_name}</p>;
                  })}
                </div>
                <div className={styles.detail_container}>
                  <h4>Duracion:</h4>
                  <p>{movie.runtime} minutos </p>
                </div>
                <div className={styles.detail_container}>
                  <h4>Genero:</h4>
                  {movie.genres.map((g) => {
                    return <p>{g.name}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <Link to={RESERVE_URL(movieid)}>
            <Button display="Reservar" />
          </Link>
        </div>
      </div>
    );
  }
}
