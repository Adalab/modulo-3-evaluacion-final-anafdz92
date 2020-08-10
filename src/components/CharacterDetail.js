import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  if (props.item === undefined) {
    return (
      <>
        <section className="bodyDetailII">
          <Link to="/item/:id">
            <div className="detail">
              <Link to="/">
                <p className="closeAlert">Volver</p>
              </Link>
              <p>El personaje que buscas no existe </p>
            </div>
          </Link>
        </section>
      </>
    );
  } else {
    let iClassName = "";
    let iClassSpecie = "";

    if (props.item.status === "Dead") {
      iClassName = "fas fa-skull-crossbones";
    }
    if (props.item.species === "Human") {
      iClassSpecie = "far fa-user-circle";
    } else if (props.item.species === "Alien") {
      iClassSpecie = "fab fa-reddit-alien";
    }
    return (
      <>
        <section className="bodyDetail">
          <Link to="/item/:id" className="linkDetail">
            <div className="detail">
              <div className="imgDetail">
                <img
                  className="imgDetailExact"
                  src={props.item.image}
                  alt={props.item.name}
                  title={props.item.name}
                />
              </div>
              <ul className="textDetail">
                <li>Nombre: {props.item.name}</li>
                <li>
                  Especie: {props.item.species}
                  <i className={iClassSpecie}></i>
                </li>
                <li>Planeta: {props.item.location}</li>
                <li>
                  Vivo o muerto?: {props.item.status}
                  <i className={iClassName}></i>
                </li>
                <li>
                  Número de Episodios en los que aparece:{" "}
                  {props.item.episode.length}
                </li>
              </ul>
              <Link to="/">
                <p className="Close"> Volver</p>
              </Link>
            </div>
          </Link>
        </section>
      </>
    );
  }
};

PropTypes.shape({
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
});

export default CharacterDetail;
