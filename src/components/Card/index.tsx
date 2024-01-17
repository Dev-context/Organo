import { ReactElement } from "react";
import "./style.css";
import avatar from "../../assets/avatar.jpg"

export default function Card(): ReactElement {
  return (
    <div className="container_card">
      <div className="card-header"></div>
      <div className="card-body">
        <div>
          <div className="card-body_avatar">
            <img src={avatar} alt="avatar" className="card-body_avatar_img"/>
          </div>
          <div className="card-body_text">
            <h4>Juliana Amoasei</h4>
            <span>Desenvolvedora de software e instrutora</span>
          </div>
        </div>
      </div>
    </div>
  );
}
