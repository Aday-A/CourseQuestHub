import React from "react";
import students  from "../../../../Assets/Images/Students.svg";
import style from "./career.module.scss";
import { Link } from "react-router-dom";


export const Register = () => {

    return(
        <div className={style.welcomebg}>
           <div className={style.welcomeContainer}>
           <div className={style.welcomeText}>
           <h2>Wondering what path to go next?</h2>
           <p>Discover your dream career right here</p>
           <Link to="/SignupPage">
           <button className={style.register}>Register</button>
           </Link>
           </div>
           </div>
         
        </div>




    )



}