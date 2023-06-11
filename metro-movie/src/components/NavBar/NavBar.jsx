import React from "react";
import styles from "./NavBar.module.css";
import Dropdown from "./Dropdown/Dropdown";
import { useUser } from "../../contexts/UserContext";
import { logout } from "../../firebase/auth-service";

export default function NavBar() {
  const {user} = useUser();
  const handleLogout = async() =>{
    await logout();
  }
  return (
    <div className={styles.nav_bar}>
      <div className={styles.title}>MetroMovies</div>
      <Dropdown />
    </div>
  );
}
