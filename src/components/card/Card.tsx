import React from "react";
import { Character } from "../results/types";
import "./card.scss";

interface CardProps {
  char: Character;
}

const Card: React.FC<CardProps> = ({ char }) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src={char.image} alt="" />
      </div>
      <div className="card__description">
        <h3>{char.name}</h3>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
      </div>
    </div>
  );
};

export default Card;
