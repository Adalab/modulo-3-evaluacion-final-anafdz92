import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  console.log(props);
  return (
    <>
      <li>
        <Link to={`/item/${props.item.id}`}>
          <img
            src={props.item.image}
            alt={props.item.name}
            title={props.item.name}
          />
          <h4>{props.item.name}</h4>
          <p>{props.item.species}</p>
        </Link>
      </li>
    </>
  );
};

export default CharacterCard;
