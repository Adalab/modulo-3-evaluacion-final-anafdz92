import React from "react";

const CharacterDetail = (props) => {
  return (
    <>
      <div>
        <header>
          <h2>Me llamo Rick y soy una modal</h2>
          <span></span>
        </header>
        <section>
          {/* <img></img> */}
          <ul>
            <li>Nombre</li>
            <li>Especie</li>
            <li>Planeta de Origen</li>
            <li>Vivo/Muerto</li>
            <li>Episodios en los que aparece</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CharacterDetail;
