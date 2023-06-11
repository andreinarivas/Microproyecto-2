import React, { useEffect, useState } from "react";
import Seat from "./Seat/Seat";
import ButtonOutline from "../ButtonOutlined/ButtonOutlined";
import styles from "./SeatSelector.module.css";

const seats = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const letter = ["A", "B", "C", "D"];

export default function SeatSelector({ wan, wanSeats, setSeats }) {
  const nSeats = ["A1"];
  const [selSeat, setSelSeat] = useState(0);

  const handleMax = () => {
    if (selSeat < wan) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {}, [selSeat]);

  return (
    <div className={styles.grid}>
      {seats.map((row, index) => {
        return (
          <div className={styles.row}>
            <h6 className={styles.row_title}>{letter[index]}</h6>
            {row.map((s) => {
              if (nSeats.includes(`${letter[index]}${s}`)) {
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
