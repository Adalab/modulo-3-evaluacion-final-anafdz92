import React from "react";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <>
      <label htmlFor="character"> Encuentra a tu personaje favoritx </label>
      <input
        type="text"
        name="character"
        id="character"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
