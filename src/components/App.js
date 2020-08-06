import React, { useEffect, useState } from "react";
import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getDataApi().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <h1> Rick and Morty </h1>
      <section>
        <Filter />
      </section>
      <section>
        <CharacterList />
      </section>
      <section>
        <CharacterDetail />
      </section>
    </>
  );
};

export default App;
