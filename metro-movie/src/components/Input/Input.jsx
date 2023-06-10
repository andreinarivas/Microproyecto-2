import React from "react";
import styles from "./Input.module.css";

export default function Input({
  type,
  placeholder,
  label,
  id,
  onChange,
  value,
}) {
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
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}
