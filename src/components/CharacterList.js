import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const itemElements = props.items
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => {
      return <CharacterCard key={item.id} item={item} />;
    });

  if (props.items.length === 0) {
    return (
      <>
        <p>No hay ningún personaje que coincida con la palabra:</p>
        <span>{props.filterContent}</span>
      </>
    );
  }
  //con {data}
  else {
    return <ul>{itemElements}</ul>;
  }
};

export default CharacterList;
