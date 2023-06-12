import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";
import foto from "./dropdown.png";
import { HOME_URL, LOGIN_URL, PROFILE_URL } from "../../../constants/URLS";
import { useUserContext } from "../../../contexts/UserContext";
import { logout } from "../../../firebase/auth-service";

export default function Dropdown() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    await logout();
    navigate(HOME_URL);
  };

  const look = () => {
    if (open) {
      return handleUser();
    } else {
      return null;
    }
  };

  const handleUser = () => {
    if (!!user) {
      return (
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link to={HOME_URL}>
              <button className={styles.button}>Inicio</button>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link to={PROFILE_URL}>
              <button className={styles.button}>{user.name}</button>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <button className={styles.button} onClick={handleLogout}>
              Salir
            </button>
          </li>
        </ul>
      );
    } else {
      return (
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
      );
    }
  };
  return (
    <div className={styles.dropdown}>
      <button className={styles.m_icon} onClick={handleOpen}>
        <img className={styles.icon} src={foto} />
      </button>
      {look()}
    </div>
  );
}
