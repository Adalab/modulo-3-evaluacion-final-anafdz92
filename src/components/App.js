import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import Logo from "../images/morty.png";
import "../stylesheets/App.scss";

const App = () => {
  const [items, setItems] = useState([].sort()); //.sort() PARA ORDENAR ALFABÉTICAMENTE?
  const [filterContent, setFilterContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataApi().then((data) => {
      setItems(data);
    });
    setLoading(false);
  }, []);

  //EVENT HANDLERS
  const handleFilter = (data) => {
    setFilterContent(data);
  };

  //RENDER
  // if (!data.includes)
  const filteredCharacters = items.filter((item) => {
    return item.name.toUpperCase().includes(filterContent.toUpperCase());
  });

  //REACT ROUTER
  const renderCharacterDetail = (props) => {
    const itemId = parseInt(props.match.params.id);
    const foundItem = items.find((item) => {
      return item.id === itemId;
    });
    // if (foundItem !== undefined) {
    return <CharacterDetail item={foundItem} />;
    // }
  };

  return (
    <>
      {/* <img src={Logo} alt="Rick and Morty" title="Rick and Morty" /> */}
      <Switch>
        <Route exact path="/">
          <img src={Logo} alt="Rick and Morty" title="Rick and Morty" />
          <Filter handleFilter={handleFilter} />
          {/*<Route exact path="/#" />*/}
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
