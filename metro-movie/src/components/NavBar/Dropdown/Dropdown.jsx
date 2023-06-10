import React, { useState } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.dropdown}>
      <button onClick={handleOpen}>
        <img src="./dropdown.png" />
      </button>
      {open ? (
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <button>Inicio</button>
          </li>
          <li className={styles.menu_item}>
            <button>Ingresar</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
