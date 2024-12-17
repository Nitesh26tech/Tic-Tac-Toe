import React, { useState } from "react";
import Square from "./square";

const Box = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const isWinner = checkWinner();

  const clickEvent = (index) => {
    if (state[index] || isWinner) {
      return;
    }
    const updatedState = [...state];
    updatedState[index] = isXTurn ? "X" : "O";
    setState(updatedState);
    setXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="box-container">
      <h1>Tic-Tac-Toe</h1>
      {isWinner ? (
        <>
          <b>{isWinner} is the Winner!</b>
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>

          <div className="box-row">
            <Square onClick={() => clickEvent(0)} value={state[0]} />
            <Square onClick={() => clickEvent(1)} value={state[1]} />
            <Square onClick={() => clickEvent(2)} value={state[2]} />
          </div>
          <div className="box-row">
            <Square onClick={() => clickEvent(3)} value={state[3]} />
            <Square onClick={() => clickEvent(4)} value={state[4]} />
            <Square onClick={() => clickEvent(5)} value={state[5]} />
          </div>
          <div className="box-row">
            <Square onClick={() => clickEvent(6)} value={state[6]} />
            <Square onClick={() => clickEvent(7)} value={state[7]} />
            <Square onClick={() => clickEvent(8)} value={state[8]} />
          </div>
          <h4>Player {isXTurn ? "X" : "O"}'s turn</h4>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Box;

