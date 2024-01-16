import { ChangeEvent, ReactElement } from "react";
import "./style.css"

interface Iinput  {
  label: string;
  placeholder: string;
  handleChanged:(prev:ChangeEvent<HTMLInputElement>)=>void;
}

export default function Input({ label, placeholder ,handleChanged}:Iinput ): ReactElement{
  return (
    <div className="container">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} onChange={handleChanged}/>
    </div>
  );
}
