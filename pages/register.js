import styles from '../styles/Register.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
 
 

const Register = () => {
    return ( 
     
        <div className={styles.form}>
            
     
        <form action="/send-data-here" method="post" >
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <label for="gmail">Gmail:</label>
        <input type="text" id="gmail" name="gmail" />
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      </div>
         )};



   

    export default Register
  

 