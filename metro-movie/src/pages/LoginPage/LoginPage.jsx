import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ButtonOutlined from "../../components/ButtonOutlined/ButtonOutlined";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    await loginWithEmailAndPassword(email, password);
    navigate("/"); // esto es para que despues de que se registre lo lleve al home page
  };
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <h1 className={styles.title}>Ingresa a tu Cuenta</h1>
        <form className={styles.container} onSubmit={handleSubmit}>
          <Input
            label="Ingrese su Correo"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={handleOnChange}
          />
          <Input
            label="Ingrese su Contraseña "
            type="password"
            placeholder="*******"
            id="password"
            name="password"
            onChange={handleOnChange}
          />
          <Button display="Ingresar" />
        </form>
        <ButtonOutlined
          display="Iniciar sesion con Google"
          action={handleSignInWithGoogle}
        />
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
