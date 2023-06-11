import React, { useState } from "react";

import full from "./icon/star-fill.png";
import outline from "./icon/star-outline.png";
import styles from "./FavIcon.module.css";

export default function FavIcon() {
  const [fav, setFav] = useState(false);

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
