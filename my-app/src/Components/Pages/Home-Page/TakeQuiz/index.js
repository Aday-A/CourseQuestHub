import React, { useState } from "react";
import style from "../Community/comm.module.scss"
import styleQ from "./quiz.module.scss"
import { DynamicButton } from "../HomeButton";

export const TakeQuiz = () => {
  
    const handleQuiz = {
        background: '#FAB03C',
        border: 'none',
        padding: '10px 100px',
        borderRadius: '30px',
        fontSize: '1.2em',
    };

  return (
    <div className={styleQ.quizContainer}>
      <div className={style.MissionText}>
        <h2>GET MATCHED WITH YOUR PERFECT CAREER FIT!</h2>
        <p>
          Take our career quiz below and receive personalized recommendations
          based on your skills, interest and values. Explore exciting
          possibilities and ignite your future.
        </p>
        <DynamicButton style={handleQuiz}  value={"Take Quiz"} />
      </div>
    </div>
  );
};
