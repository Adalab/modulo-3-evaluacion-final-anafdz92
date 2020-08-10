import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataApi from "../services/getDataApi";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetail from "./CharacterDetail";
import Logo from "../images/morty.png";
import Img from "../images/space.jpg";
import Reset from "./Reset";

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

  //HANDLE RESET
  const resetItemData = () => {
    setFilterContent("");
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
    <div className="main">
      <Switch>
        <Route exact path="/">
          <div className="title">
            <img
              src={Logo}
              alt="Rick and Morty"
              title="Rick and Morty"
              className="titleImg"
            />
            <img src={Img} alt="morty" title="morty" className="titleImgII" />
          </div>
          <div className="filterContainer">
            <Filter handleFilter={handleFilter} filterContent={filterContent} />
            {loading === true ? "Cargando..." : ""}
            <Reset reset={resetItemData} />
          </div>

          <CharacterList
            items={filteredCharacters}
            filterContent={filterContent}
          />
        </Route>
        <Route path="/item/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
