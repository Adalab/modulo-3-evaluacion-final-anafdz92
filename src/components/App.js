import React from "react";
//import React, { useState } from 'react'; POR SI PONES STATE
//import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

const App = () => {
  return (
    <>
      <h1> Rick and Morty </h1>
      <section>
        <Filter />
      </section>
      <section>
        <CharacterList />
      </section>
    </>
  );
};

export default App;
