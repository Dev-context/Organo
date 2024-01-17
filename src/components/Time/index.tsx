import { ReactElement } from "react";
import "./style.css";
import Card from "../Card";

export default function Times(): ReactElement {
  return (
    <div className="container_times">
      <h3 className="title_job">Programação</h3>
      <div className="container_times_cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
