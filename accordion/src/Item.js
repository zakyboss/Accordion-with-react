import { useState } from "react";
export default function Item({itemObj, index}){
   const [isShowing,setIsShowing]=useState(false)
    function handleToggleDisplay(){
        setIsShowing(!isShowing)
    }
    let Number = index +1 ;
    const {title,text}= itemObj;

    return (
        <div className={isShowing? 'item open':'item closed'} >
            <p className="number">0{Number}</p>
            <p className="title" onClick={handleToggleDisplay}>{title}</p>
            <p className="icon">{isShowing?'-':'+'}</p>
            
            <div className="content-box">
            <p className="text">{isShowing? text : ''}</p>

            </div>
        </div>
    )
}