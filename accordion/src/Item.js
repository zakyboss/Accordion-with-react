import { useState } from "react";
export default function Item({itemObj, index}){
   const [isShowing,setIsShowing]=useState(false)
    function handleToggleDisplay(){
        setIsShowing(!isShowing)
    }
    let Number = index +1 ;
    const {title,text}= itemObj;

    return (
        <div className="item">
            <p className="number">0{Number}</p>
            <p className="title">{title}</p>
            <p className="icon">-</p>
            
            <div className="content-box">
            <p >{text}</p>

            </div>
        </div>
    )
}