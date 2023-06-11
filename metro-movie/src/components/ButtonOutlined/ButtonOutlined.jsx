import React from "react";
import styles from "./ButtonOutlined.module.css";

export default function ButtonOutlined({ display, action }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={action}>
        {display}
      </button>
    </div>
  );
}
