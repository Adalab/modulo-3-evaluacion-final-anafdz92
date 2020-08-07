import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  if (props.item === undefined) {
    return (
      <>
        <Link to="/item/:id">
          <section className="detail">
            <Link to="/">
              <p>CIÉRRAME</p>
            </Link>
            <p>El personaje que buscas no existe </p>
          </section>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/item/:id">
          <section className="detail">
            <Link to="/">
              <p>CIÉRRAME</p>
            </Link>
            <div>
              <img
                src={props.item.image}
                alt={props.item.name}
                title={props.item.name}
              />
            </div>
            <ul className="textDetail">
              <li>Nombre: {props.item.name}</li>
              <li>Especie: {props.item.species}</li>
              <li>Planeta: {props.item.location}</li>
              <li>
                Vivo o muerto?: {props.item.status}
                {/* <i className={iClassName}></i> */}
                <i className="fas fa-skull-crossbones"></i>
              </li>
              <li>
                Número de Episodios en los que aparece:{" "}
                {props.item.episode.length}
              </li>
            </ul>
          </section>
        </Link>
      </>
    );
  }
};
// let iClassName = "";

// if (props.item.status.dead) {
//   iClassName = "fas fa-skull-crossbones";
// }
//TRYING ICONS

export default CharacterDetail;
