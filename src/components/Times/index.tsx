import Time from "../Time";
import "./style.css";
import { ReactElement } from "react";

export default function Times(): ReactElement {
  return (
    <div>
      <div className="container_times_title">
        <h2>Minha Organizacao</h2>
      </div>
      <div className="container_times">
        <Time />
        <Time />
        <Time />
      </div>
    </div>
  );
}
