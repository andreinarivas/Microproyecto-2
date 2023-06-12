import React from "react";
import styles from "./NavBar.module.css";
import Dropdown from "./Dropdown/Dropdown";
import { useUserContext } from "../../contexts/UserContext";
import { logout } from "../../firebase/auth-service";

export default function NavBar() {
  const { user } = useUserContext();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className={styles.nav_bar}>
      <div className={styles.title}>MetroMovies</div>
      <div className={styles.pointer}>
        <Dropdown />
      </div>
    </div>
  );
}
