import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import foto from "./dropdown.png";

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
            <button className={styles.button}>Inicio</button>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.button}>Ingresar</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
