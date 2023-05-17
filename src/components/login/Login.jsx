import { useState } from "react";
import styles from "./login.module.css";
import {Link} from "react-router-dom";

export const Login = () => {
  const [ email, setEmail] = useState("");
  const [ pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  }

  return(
    <div className={styles.login_box}>
      <span className={styles.icon}>🔒</span>
      <h1>Sing in</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.user_box}>
          <input value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input} type="email" placeholder="Email Address*"/>
          <input value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={styles.input} type="password" placeholder="Password*"/>
          <label>
            <input type="checkbox" name="remember"/>
            Remember me
          </label>
        </div>
        <button className={styles.btn} type="submit">Sing in</button>
      </form>

      <div className={styles.information}>
        <button className={styles.btn_registration}>Forgot password?</button>
        <Link to="/register" className={styles.btn_registration}> Don't havean account? Sing up</Link>
      </div>
    </div>
    
  )
}