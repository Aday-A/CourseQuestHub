import React from "react";
import style from "./vision.module.scss";
import button from "../CareerPath/career.module.scss"
import { Link } from "react-router-dom";
import workman from "../../../../Assets/Images/workman.svg";


export const Vision = () => {

    return(
        <div className={style.visionContainer}>

            <div className={style.visionText}>
                <h2>Vision</h2>
                <p>To ignite every Nigerian youth's passion by 2034,  equipping them to chart their dream careers, building a future where informed choices fuel potential and shape a brighter Nigeria.</p>
                <div>
                <Link to="/SignupPage">
                <button className={button.register}>Register</button>
                </Link>
                </div>
            </div>

            <div className={style.workman}>
                <img src={workman}/>
            </div>

        </div>
    )
}