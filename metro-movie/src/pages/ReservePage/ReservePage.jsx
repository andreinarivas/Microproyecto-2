import React from "react";
import styles from "./ReservePage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NumberSelector from "../../components/NumberSelector/NumberSelector";
import SeatSelector from "../../components/SeatSelector/SeatSelector";

export default function ReservePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.movie_detail}>
          <img></img>
          <h1>Titulo</h1>
        </div>
        <form>
          <Input
            type="text"
            label="Ingrese su nombre completo"
            placeholder="E.g: Pedro Cadenas"
          />
          <Input
            type="email"
            label="Ingrese su correo"
            placeholder="E.g: pedro@gmail.com"
          />
          <Input
            type="text"
            label="Ingrese su cedula"
            placeholder="E.g: 29551884"
          />
        </form>
        <h6 className={styles.select}>Seleccione el numero de entradas:</h6>
        <NumberSelector />
        <SeatSelector wan={4} />
        <Button display="Reservar" />
      </div>
    </div>
  );
}
