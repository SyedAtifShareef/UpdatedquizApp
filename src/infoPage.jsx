import React from "react";
import UserInput from "./userInput";
import QnaPage from "./QnaPage";
export default function InfoPage(){
    
    const [url,seturl]=React.useState(null)
    function renderNextPage(url){
        seturl(url)
    }

    
    return (
        <>

        {url!==null?<QnaPage url={url}/>:<UserInput renderNextPage={renderNextPage}/>}
        </>
    )

}