<<<<<<< HEAD
import React from 'react'
import styles from './MovieInfo.module.css'

const imgs = ["https://upload.wikimedia.org/wikipedia/en/d/dd/Almost_famous_poster1.jpg"]

export default function MovieInfo() {

  return (
    <div>MovieInfo</div>
  )
=======
import React, { useEffect, useState } from "react";
import styles from "./MovieInfo.module.css";
import Button from "../../components/Button/Button";
import FavIcon from "../../components/FavIcon/FavIcon";
import { useMovies } from "../../hooks/useMovies";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { RESERVE_URL } from "../../constants/URLS";
import { getSold } from "../../firebase/firestore/firestore-manage";

export default function MovieInfo() {
  const { movieid } = useParams();
  const { isLoading, movie, getMovie, actors, getActors } = useMovies();
  const [fav, setFavorite] = useState(false);
  const { user, setUser } = useUserContext();
  const [soldOut, setSoldOut] = useState(true);

  const dateInPast = function (firstDate, secondDate) {
    if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
      return true;
    }

    return false;
  };

  async function handleSoldOut() {
    const result = await getSold(movieid);

    if (result) {
      setSoldOut(true);
    } else {
      setSoldOut(false);
    }
  }

  function handleRelease() {
    const firstDate = new Date();
    const secondDate = new Date(movie.release_date);

    if (!dateInPast(firstDate, secondDate)) {
      if (!soldOut) {
        return (
          <Link to={RESERVE_URL(movieid)} className={styles.link}>
            <Button display="Reservar" />
          </Link>
        );
      } else {
        return <Button display="Agotado" />;
      }
    } else {
      return <Button display="Proximamente" />;
    }
  }

  useEffect(() => {
    if (user.favorites.some((f) => movieid == f.id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [soldOut]);

  useEffect(() => {
    if (!isLoading && movieid) {
      getMovie(movieid);
      getActors(movieid);
      handleSoldOut();
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
          {handleRelease()}
        </div>
      </div>
    );
  }
>>>>>>> 314d99b6374338a5f459cfbe5d6e5d24f7143d4b
}
