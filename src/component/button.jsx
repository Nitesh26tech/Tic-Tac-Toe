import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <div className="reset-btn">
      <button onClick={onClick} className="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
