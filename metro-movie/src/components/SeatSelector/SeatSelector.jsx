import React, { useEffect, useState } from "react";
import Seat from "./Seat/Seat";
import ButtonOutline from "../ButtonOutlined/ButtonOutlined";
import styles from "./SeatSelector.module.css";
import { getReserved } from "../../firebase/firestore/firestore-manage";

const seats = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const letter = ["A", "B", "C", "D"];

export default function SeatSelector({ wan, wanSeats, setSeats, movieid }) {
  const [selSeat, setSelSeat] = useState(0);
  const [reserved, setReserved] = useState(null);
  const [isLoad, setIsLoad] = useState(true);

  async function findReserved() {
    const data = await getReserved(movieid);
    setReserved(data);
    setIsLoad(false);
    console.log(reserved);
  }

  console.log(reserved);

  const handleMax = () => {
    if (selSeat < wan) {
      return false;
    } else {
      return true;
    }
  };



  useEffect(() => {
    findReserved();
  }, [isLoad]);

  if (isLoad) {
    return <div>LOADING</div>;
  } else {
    return (
      <div className={styles.grid}>
        {seats.map((row, index) => {
          return (
            <div className={styles.row}>
              <h6 className={styles.row_title}>{letter[index]}</h6>
              {row.map((s) => {
                if (reserved.ocupadas.includes(`${letter[index]}${s}`)) {
                  return (
                    <Seat
                      n={s}
                      id={`${letter[index]}${s}`}
                      selSeat={selSeat}
                      setSelSeats={setSelSeat}
                      disable={true}
                    />
                  );
                } else {
                  return (
                    <Seat
                      n={s}
                      id={`${letter[index]}${s}`}
                      selSeat={selSeat}
                      setSelSeats={setSelSeat}
                      wanSeats={wanSeats}
                      setSeats={setSeats}
                      disable={handleMax()}
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
