import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import ButtonOutlined from "../../components/ButtonOutlined/ButtonOutlined";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase/auth-service";


export default function RegisterPage() {
 const navigate = useNavigate()
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle()
    
  }

  const [formData, setFormData]= useState({
    name: "",
    email: "",
    password:""
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,

    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password, ...extraData} = formData;
    await registerWithEmailAndPassword(email, password, extraData);
    navigate("/");   // esto es para que despues de que se registre lo lleve al home page
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
            onChange={handleOnChange}
            placeholder="Nombre Completo"
          />
          <Input
            label="Ingrese su correo"
            onChange={handleOnChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <Input
            label="Ingrese su contraseña"
            onChange={handleOnChange}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <Button display="Registrar Usuario" />
        </form>
        <ButtonOutlined display="Registrar con Google" onClick={handleSignInWithGoogle}/>
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
