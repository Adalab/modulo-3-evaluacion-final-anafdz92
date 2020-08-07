import React from "react";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="character"> Encuentra a tu personaje favoritx </label>
        <input
          type="text"
          name="character"
          id="character"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Filter;
