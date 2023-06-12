import React from "react";
import styles from "./SearchBar.module.css";

export default function Input({ type, placeholder, label, id, setInput }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={id}
        onInput={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}
