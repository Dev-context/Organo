import { ReactNode,MouseEvent, ReactElement } from "react"
import "./style.css"

interface ButtonProps{
    children:ReactNode;
    handleClick:(event:MouseEvent<HTMLButtonElement>)=>void;
}

export default function Button({children,handleClick}:ButtonProps):ReactElement{
    return(
        <button className="form-button" onClick={handleClick}>
           {children}
        </button>
    )
}