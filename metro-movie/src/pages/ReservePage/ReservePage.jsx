import React, { useEffect, useState } from "react";
import styles from "./ReservePage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NumberSelector from "../../components/NumberSelector/NumberSelector";
import SeatSelector from "../../components/SeatSelector/SeatSelector";

export default function ReservePage() {
  const [reserveData, setReserveData] = useState({});
  const [number, setNumber] = useState(0);
  const [seat, setSeats] = useState([]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setReserveData((oldData) => ({ ...oldData, [name]: value }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.movie_detail}>
          <img></img>
          <h1>Titulo</h1>
        </div>
        <form>
          <Input
            id="nombre"
            type="text"
            label="Ingrese su nombre completo"
            placeholder="E.g: Pedro Cadenas"
            onChange={onChange}
          />
          <Input
            id="email"
            type="email"
            label="Ingrese su correo"
            placeholder="E.g: pedro@gmail.com"
            onChange={onChange}
          />
          <Input
            id="cedula"
            type="text"
            label="Ingrese su cedula"
            placeholder="E.g: 29551884"
            onChange={onChange}
          />
        </form>
        <h6 className={styles.select}>Seleccione el numero de entradas:</h6>
        <NumberSelector number={number} setNumber={setNumber} />
        <SeatSelector wan={number} wanSeats={seat} setSeats={setSeats} />
        <Button
          display="Reservar"
          action={() => {
            setReserveData((oldData) => ({
              ...oldData,
              ["n_entradas"]: number,
              ["puestos"]: seat,
            }));
            console.log(reserveData);
          }}
        />
      </div>
    </div>
  );
}
