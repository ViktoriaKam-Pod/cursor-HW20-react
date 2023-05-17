import { useState } from "react";
import styles from "./register.module.css";
import {Link} from "react-router-dom";

export const Register = () => {
  const [ email, setEmail] = useState("");
  const [ pass, setPass] = useState("");
  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(lastName);
    console.log(firstName);
    console.log(pass);
  }

  return(
    <div className={styles.login_box}>
      <span className={styles.icon}>🔒</span>
      <h1>Sing up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.user_box}>
          <div className={styles.registration}>
            <input value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input} type="text" placeholder="First Name*"/>
            <input value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input} type="text" placeholder="Last Name*"/>
          </div>
          <input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input} type="email" placeholder="Email Address*"/>
          <input value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={styles.input} type="password" placeholder="Password*"/>
          <label>
            <input type="checkbox" name="remember"/>
            <p className={styles.p_label}>I want to receive inspiration, marketing <br/>
            promotions and updates via email.</p>
          </label>
        </div>
        <button className={styles.btn} type="submit">Sing un</button>
      </form>

      <div className={styles.information}>
        <button className={styles.btn_registration}>Forgot password?</button>
        <Link to="/" className={styles.btn_registration}>Already have an account? Sing in</Link>
      </div>
    </div>
    
  )
}
