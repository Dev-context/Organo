import { MouseEventHandler, useState } from "react";
import Button from "../Button";
import ComboBox from "../ComboBox";
import Input from "../Input/input";
import "./style.css";

export default function Form() {
  const [nome, setNome] = useState<string>();
  const [cargo, setCargo] = useState<string>();
  const [imagem, setImagem] = useState<string>();
  const [time, setTime] = useState<string>();

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log(nome, cargo, imagem, time);
  };

  return (
    <section className="formaulario">
      <form>
        <h2>Preencha os dados para criar o card do coloborador</h2>
        <Input
          label="Nome"
          placeholder="Digite o nome"
          handleChanged={(event) => setNome(event.target.value)}
        />
        <Input
          label="Cargo"
          placeholder="Digite seu cargo"
          handleChanged={(event) => setCargo(event.target.value)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço na imagem"
          handleChanged={(event) => setImagem(event.target.value)}
        />
        <ComboBox
          handleChanged={(event) => setTime(event.target.value)}
          value={time}
        />
        <Button handleClick={handleSubmit}>Criar card</Button>
      </form>
    </section>
  );
}
