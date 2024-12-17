import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <div onClick={onClick} className="square">
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
