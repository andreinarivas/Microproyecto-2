import React, { useEffect, useState } from "react";
import styles from "./NumberSelector.module.css";

export default function NumberSelector({ number, setNumber }) {
  const handleDecrease = (newNumber) => {
    if (newNumber <= 0) {
      return 0;
    } else {
      return newNumber - 1;
    }
  };
  const handleIncrease = (newNumber) => {
    if (newNumber >= 5) {
      return 5;
    } else {
      return newNumber + 1;
    }
  };
  useEffect(() => {}, [number]);
  return (
    <div className={styles.container}>
      <h4>{number}</h4>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(handleDecrease(number));
          }}
        >
          -
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(handleIncrease(number));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
