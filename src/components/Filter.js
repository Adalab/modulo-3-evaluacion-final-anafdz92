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
        <label htmlFor="character"> ENCUENTRA A A TU PERSONAJE FAVORITO </label>
        <input
          className="inputFilter"
          type="text"
          name="character"
          id="character"
          onChange={handleChange}
          handleFilter={props.handleFilter}
          placeholder={props.filterContent}
        />
      </form>
    </>
  );
};

export default Filter;
