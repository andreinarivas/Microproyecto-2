import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <NavBar />
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
