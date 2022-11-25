import React from "react";

export default function userInput(props){
    
    const [difficulty,setdifficulty]=React.useState("Easy")
    const [QuestionCategory,setQuestionCategory]=React.useState(9)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const url=`https://opentdb.com/api.php?amount=10&category=${e.target[0].value}&difficulty=${e.target[1].value}&type=multiple`
        props.renderNextPage(url)

    }
    return(
        <>
        <div className="start">
        <h1 className="heading">Give Quiz Info</h1>
        <p className="introText">Select difficulty level and Question Category </p>
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
        <div className="margin ">
        <label htmlFor="">Select Category:</label>
        <select className="firstbox" value={QuestionCategory}onChange={(e)=>setQuestionCategory(e.target.value)}>
            <option value="9">General Knowledge</option>
            <option value="17">Science</option>
            <option value="18">Computers</option>
            <option value="27">Animals</option>
        </select>
        </div>

        <div className="margin ">
        <label htmlFor="">Select Difficulty:</label>
        <select className="secondbox"value={difficulty}onChange={(e)=>setdifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>    
        </select>
        </div>

        <div className="margin btn">
        <input className="btnStart" type="submit" value="Submit Now" />
        </div>
        </form>
        </div>
        
        </div>

        
        </>

    )
}