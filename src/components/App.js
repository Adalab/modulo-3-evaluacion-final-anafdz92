import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import Logo from "../images/morty.png";
import "../stylesheets/App.scss";

const App = () => {
  const [items, setItems] = useState([].sort());
  const [filterContent, setFilterContent] = useState(
    JSON.parse(localStorage.getItem("myValueLocalStorage")) || ""
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataApi().then((data) => {
      setItems(data);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("myValueLocalStorage", JSON.stringify(filterContent));
  });

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
    const itemId = parseInt(props.match.params.id);
    const foundItem = items.find((item) => {
      return item.id === itemId;
    });
    return <CharacterDetail item={foundItem} />;
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <img src={Logo} alt="Rick and Morty" title="Rick and Morty" />
          <Filter handleFilter={handleFilter} filterContent={filterContent} />
          {loading === true
            ? "Cargando..."
            : "Mostrando tus datos cargados! Bien!..."}
          <CharacterList
            items={filteredCharacters}
            filterContent={filterContent}
          />
        </Route>
        <Route path="/item/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
