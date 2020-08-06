import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const itemElements = props.items.map((item) => {
    return <CharacterCard key={item.id} item={item} />;
  });
  return <ul>{itemElements}</ul>;
};

export default CharacterList;
