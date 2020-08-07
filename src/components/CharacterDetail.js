import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props);

  // const countEpisodes = props.item.episode(item=>);
  return (
    <>
      <Link to="/item/:id">
        <section>
          <Link to="/">
            <p>CIÉRRAME</p>
          </Link>
          <img
            src={props.item.image}
            alt={props.item.name}
            title={props.item.name}
          />
          <ul>
            <li>Nombre: {props.item.name}</li>
            <li>Especie: {props.item.species}</li>
            <li>Planeta: {props.item.location}</li>
            <li>Vivo o muerto?: {props.item.status} </li>
            <li>
              Número de Episodios en los que aparece:{" "}
              {props.item.episode.length}
            </li>
          </ul>
        </section>
      </Link>
    </>
  );
};

export default CharacterDetail;
