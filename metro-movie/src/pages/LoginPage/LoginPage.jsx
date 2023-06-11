import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ButtonOutlined from "../../components/ButtonOutlined/ButtonOutlined";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <h1 className={styles.title}>Ingresa a tu Cuenta</h1>
        <form className={styles.container} onSubmit={handleSubmit}>
          <Input
            label="Ingrese su Correo"
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <Input
            label="Ingrese su Contraseña "
            value={pass}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <Button display="Ingresar" />
        </form>
        <ButtonOutlined display="Iniciar sesion con Google" />
        <div className={styles.redirect}>
          <label htmlFor="link_login">¿No tienes cuenta?</label>
          <Link to="/register">
            <button
              id="link_login"
              className={styles.linkbtn}
              onClick={() => props.onFormSwitch("login")}
            >
              Registrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
