import React from "react";
import ReservaCard from "../../components/ReservaCard/ReservaCard";
import styles from "./AdminPage.module.css";

export default function AdminPage() {
  return (
    <div className={styles.page}>
      <h1>Reservas Realizadas</h1>
      <div className={styles.container}>
        <ReservaCard />
        <ReservaCard />
        <ReservaCard />
        <ReservaCard />
        <ReservaCard />
      </div>
    </div>
  );
}
