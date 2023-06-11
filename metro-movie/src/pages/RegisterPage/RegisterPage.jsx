import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.page}>
      <div className={styles.register}>
        <h1 className={styles.title}>Crea tu Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Ingrese su nombre"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre Completo"
            value={name}
          />
          <Input
            label="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <Input
            label="Ingrese su contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <Button display="Registrar Usuario" />
        </form>
        <div className={styles.redirect}>
          <label htmlFor="link_login">¿Ya tienes cuenta?</label>
          <Link to="/login">
            <button
              id="link_login"
              className={styles.linkbtn}
              onClick={() => props.onFormSwitch("login")}
            >
              Inicia Sesion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
