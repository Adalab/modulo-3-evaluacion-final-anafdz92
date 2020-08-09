import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  console.log(props);
  return (
    <>
      <li className="item">
        <Link to={`/item/${props.item.id}`}>
          <div className="imgContainer">
            <img
              className="itemImg"
              src={props.item.image}
              alt={props.item.name}
              title={props.item.name}
            />
          </div>
          <h4 className="itemName">{props.item.name}</h4>
          <p className="itemSpecie">{props.item.species}</p>
        </Link>
      </li>
    </>
  );
};

export default CharacterCard;
