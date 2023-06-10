import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../../components/Footer/Footer";

export default function Layout() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <NavBar />
      </div>
      <section className={styles.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
