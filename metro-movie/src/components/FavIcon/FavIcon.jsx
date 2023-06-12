import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

import full from "./icon/star-fill.png";
import outline from "./icon/star-outline.png";
import styles from "./FavIcon.module.css";
import { updateUserFavs } from "../../firebase/firestore/firestore-manage";

export default function FavIcon({ fav, setFav, movie }) {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    handleFavorite();
    changeInfo();
  }, [fav]);

  function removeFav() {
    const favs = user.favorites.filter((f) => f.id != movie.id);
    return favs;
  }

  function changeInfo() {
    console.log(fav);
    if (fav && !user.favorites.some((f) => movie.id == f.id)) {
      setUser({ ...user, favorites: user.favorites.concat(movie) });
    } else if (!fav) {
      setUser({ ...user, favorites: removeFav() });
    }
    console.log(movie);
    updateUserFavs(user.id, movie);
  }

  function handleFavorite() {
    if (fav) {
      return full;
    } else {
      return outline;
    }
  }
  const handleClick = () => {
    setFav(!fav);
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        handleClick();
      }}
    >
      <img className={styles.icon} src={handleFavorite()} />
    </div>
  );
}
