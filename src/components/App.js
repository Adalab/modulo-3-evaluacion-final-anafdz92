import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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

  //REACT ROUTER
  const renderCharacterDetail = (props) => {
    console.log(props);
    const itemId = parseInt(props.match.params.id);
    const foundItem = items.find((item) => {
      return item.id === itemId;
    });
    if (foundItem !== undefined) {
      return <CharacterDetail item={foundItem} />;
    }
  };

  return (
    <>
      <h1> Rick and Morty </h1>
      <Filter handleFilter={handleFilter} />
      <CharacterList items={filteredCharacters} />
      <Switch>
        <Route path="/item/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
