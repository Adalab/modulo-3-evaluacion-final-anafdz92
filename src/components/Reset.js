import React from "react";

const Reset = (props) => {
  const handleReset = (ev) => {
    props.reset(ev);
  };
  return (
    <>
      <button type="button" onClick={handleReset} className="resetButton">
        Reset
      </button>
    </>
  );
};

export default Reset;
