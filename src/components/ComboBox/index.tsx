import { ChangeEvent, ReactElement } from "react";
import "./style.css";

type cargos = {
  nome?: string;
  descricao?: string;
  avatar?: string;
};

const cargos: Array<cargos> = [
  {
    nome: "Juliana Amoasei",
    descricao: "Desenvolvedora de software e instrutora",
    avatar: "",
  },
  {
    nome: "Daniel Artine",
    descricao: "Engenheiro de Software na Stone Age",
    avatar: "",
  },
  {
    nome: "Guilherme Lima",
    descricao: "Hipster e CEO da Alura",
    avatar: "",
  },
];

interface Icombox {
  handleChanged: (prev: ChangeEvent<HTMLSelectElement>) => void;
  value:string|undefined
}

export default function ComboBox({ handleChanged,value }: Icombox): ReactElement {
  return (
    <div className="select-cargos">
      <label>Time</label>
      <select className="select-cargos" onChange={handleChanged} value={value}>
        {cargos.map((item) => {
          return <option>{item.descricao}</option>;
        })}
      </select>
    </div>
  );
}
