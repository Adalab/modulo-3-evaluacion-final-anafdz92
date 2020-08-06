import React from "react";

const CharacterCard = (props) => {
  //CON UN IF DETERMINAR SI LA IMAGEN ES NULL QUE SALGA UNA MÍA
  return (
    <>
      <li>
        <img
          src={props.item.image}
          alt={props.item.name}
          title={props.item.name}
        />
        <h4>{props.item.name}</h4>
        <p>{props.item.species}</p>
      </li>
    </>
  );
};

export default CharacterCard;
