import React, { useEffect } from "react";
import axios from "axios";
import FinalPage from "./finalPage";
import { ScrollRestoration } from "react-router-dom";

export default function QnaPage(props){
    const [mydata,setmydata]=React.useState([])
    const [showFinalResults,setFinalresults]=React.useState(false)
    const [score,setscore]=React.useState(0)
    useEffect(()=>{
    axios
    .get(props.url)
    .then((res)=>setmydata(res.data.results));
    
   },[]);
    function optionClicked(option,correct_answer){
    
    }
    
    return(
    <>

    {showFinalResults?<FinalPage/>:
    <div className="EntireContainer">
    {mydata.map((Qna)=>{
        const {question,correct_answer,incorrect_answers}=Qna;
        let unshuffled = Object.values({...incorrect_answers,4:correct_answer})
        let shuffled = unshuffled
         .map(value => ({ value, sort: Math.random() }))
         .sort((a, b) => a.sort - b.sort)
         .map(({ value }) => value)
          return <div className="Qna"key={question}>
            <h2 className="questionHeading">{question}</h2>
            <p className="answers">{shuffled.map((option)=>
                {
                return <span key={option} onClick={()=>optionClicked(option,correct_answer)} className="singleAns">{option}</span>}
                )}</p>
        </div>
    }

    )}
    <div className="submitButton"><button className="btn">Submit Now</button></div> 
    </div>  }
    
    </>


    )
}