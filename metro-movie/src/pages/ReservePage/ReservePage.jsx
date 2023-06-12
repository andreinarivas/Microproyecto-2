import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import styles from "./ReservePage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NumberSelector from "../../components/NumberSelector/NumberSelector";
import SeatSelector from "../../components/SeatSelector/SeatSelector";
import { updateReserved } from "../../firebase/firestore/firestore-manage";
import { createReserva } from "../../firebase/firestore/firestore-manage";
import ButtonOutlined from "../../components/ButtonOutlined/ButtonOutlined";
import { HOME_URL } from "../../constants/URLS";

export default function ReservePage() {
  const { movieid } = useParams();
  const { isLoading, movie, getMovie } = useMovies();
  const [reserveData, setReserveData] = useState({});
  const [number, setNumber] = useState(0);
  const [seat, setSeats] = useState([]);
  const [save, setSave] = useState(false);
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;

    setReserveData((oldData) => ({ ...oldData, [name]: value }));
  };

  function handleSave() {
    if (save) {
      return (
        <Button
          display="Reservar"
          action={() => {
            handleSubmit();
          }}
        />
      );
    } else {
      return <></>;
    }
  }

  function guardarInfo() {
    setReserveData((oldData) => ({
      ...oldData,
      ["n_entradas"]: number,
      ["puestos"]: seat,
      ["movie"]: movie,
    }));
    setSave(true);
  }

  async function handleSubmit() {
    const data = await createReserva(reserveData);
    const result = await updateReserved(movieid, reserveData);
    console.log(reserveData);
    navigate(HOME_URL);
  }

  useEffect(() => {
    if (!isLoading && movieid) {
      getMovie(movieid);
    }
  }, [getMovie]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!isLoading && !movie) {
    return (
      <div>
        <h1>NO SE PUDO HALLAR LA INFORMACION</h1>
      </div>
    );
  }
  if (!isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.movie_detail}>
            <img
              className={styles.pic}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <h1 className={styles.title}>{movie.title}</h1>
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
          <SeatSelector
            wan={number}
            wanSeats={seat}
            setSeats={setSeats}
            movieid={movieid}
          />
          <ButtonOutlined
            display="Guardar Seleccion"
            action={() => {
              guardarInfo();
            }}
          />
          {handleSave()};
        </div>
      </div>
    );
  }
}
