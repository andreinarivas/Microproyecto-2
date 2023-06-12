import React, { useEffect, useState } from "react";
import styles from "./Seat.module.css";

export default function Seat({
  n,
  selSeat,
  setSelSeats,
  disable,
  wanSeats,
  setSeats,
  id,
}) {
  const [look, setLook] = useState(0);

  useEffect(() => {}, [look, selSeat, setSelSeats]);


  const handleLook = (look) => {
    if (look) {
      return { background: "#fffded", color: "#fe9148" };
    } else {
      return {};
    }
  };

  const handleSelect = (selSeat) => {
    if (!look) {
      setSelSeats(selSeat + 1);
      setSeats([...wanSeats, id]);
    } else {
      setSelSeats(selSeat - 1);
    }
  };

  return (
    <div className={styles.seat}>
      <button
        className={styles.button}
        onClick={() => {
          handleSelect(selSeat);
          setLook(!look);
        }}
        style={handleLook(look)}
        disabled={disable}
      >
        {n}
      </button>
    </div>
  );
}
