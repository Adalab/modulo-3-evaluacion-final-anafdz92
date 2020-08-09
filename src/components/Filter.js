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
      <form onSubmit={submitHandler} className="formFilter">
        <label htmlFor="character"> Encuentra a tu personaje favoritx </label>
        <input
          className="inputFilter"
          type="text"
          name="character"
          id="character"
          onChange={handleChange}
          handleFilter={props.handleFilter}
          placeholder={props.filterContent} //INTENTO QUE EL LOCAL STORAGE SE  PINTE EN EL VALUE
        />
      </form>
    </>
  );
};

export default Filter;
