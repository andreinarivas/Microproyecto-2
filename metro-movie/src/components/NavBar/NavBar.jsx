import React from "react";
import styles from "./NavBar.module.css";
import Dropdown from "./Dropdown/Dropdown";

export default function NavBar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.title}>MetroMovies</div>
      <Dropdown />
    </div>
  );
}
