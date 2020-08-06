import React, { useEffect, useState } from "react";
import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [items, setItems] = useState([]);
  const [filterContent, setFilterContent] = useState("");
  useEffect(() => {
    getDataApi().then((data) => {
      setItems(data);
    });
  }, []);

  //EVENT HANDLERS
  const handleFilter = (data) => {
    setFilterContent(data);
  };

  //RENDER
  const filteredCharacters = items.filter((item) => {
    return item.name.toUpperCase().includes(filterContent.toUpperCase());
  });
  return (
    <>
      <h1> Rick and Morty </h1>
      <Filter handleFilter={handleFilter} />
      <CharacterList items={filteredCharacters} />
      <CharacterDetail />
    </>
  );
};

export default App;
