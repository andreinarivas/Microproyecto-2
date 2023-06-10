import React, {useState} from 'react'
import styles from './RegisterPage.module.css'


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }
  return (
       <div className={styles.register}>
        <form onSubmit = {handleSubmit}>
            <label className={styles.label1} >Crea tu Cuenta</label>
            <input className={styles.inputn} value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre Completo" />
            <input className={styles.inpute}  value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id= "email" name = "email"/> 
            <input className={styles.inputp} value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='*******' id= "password" name = "password"/>
            <button className={styles.registrar} type = "submit">Ingresar</button>
        </form>
        <button className={styles.linkbtn} onClick={() => props.onFormSwitch('login')}>¿Ya tienes cuenta? Inicia Sesion</button>
        </div>
  )
}
