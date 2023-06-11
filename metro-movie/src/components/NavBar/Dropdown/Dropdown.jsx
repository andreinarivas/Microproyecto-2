import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";
import foto from "./dropdown.png";
import { HOME_URL, LOGIN_URL } from "../../../constants/URLS";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.dropdown}>
      <button className={styles.m_icon} onClick={handleOpen}>
        <img className={styles.icon} src={foto} />
      </button>
      {open ? (
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link to={HOME_URL}>
              <button className={styles.button}>Inicio</button>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link to={LOGIN_URL}>
              <button className={styles.button}>Ingresar</button>
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
