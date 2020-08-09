import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default CharacterCard;
