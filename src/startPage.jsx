import React from "react";

import { Link } from "react-router-dom";

export default function startPage(){


    return(
        <div className="start">
        <h1 className="heading">Quiz App</h1>
        <p className="introText">Test your knowledge with this amazing quiz app</p>
        
        

        
        
        
            <Link className="text" to="/infoPage">
                <button className="btnStart">StartQuiz</button>
            </Link>
      </div>
    )
}