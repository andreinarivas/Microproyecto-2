import React ,{ useState }from 'react'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }
  return (
    <div className = {styles.login}>
        <form className = {styles.container }onSubmit = {handleSubmit}>
            <label className= {styles.label1}> Ingresa a tu Cuenta </label>
            <input className= {styles.inpute} value = {email} type="email" placeholder='youremail@gmail.com' id= "email" name = "email"/> 
            <input className= {styles.inputp} value = {pass} type="password" placeholder='*******' id= "password" name = "password"/>
            <button className= {styles.ingresar}type = "submit">Ingresar</button>
        </form>
        <button className={styles.linkbtn} onClick={() => props.onFormSwitch('register')}>¿No tienes cuenta? Registrate</button>
        </div>
    )
}
