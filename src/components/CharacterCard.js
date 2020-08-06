import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      <li>
        <p>Holi soy una fotito</p>
        {/* <img
          src={props.item.photo}
          alt={props.item.name}
          title={props.item.name}
        /> */}
        <h4>Me llamo Morty</h4>
        <p>Soy un Humano</p>
      </li>
    </>
  );
};

export default CharacterCard;
