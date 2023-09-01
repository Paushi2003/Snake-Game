import React from "react";

export const SetPlayers = props => {
  const {
    numOfPlayers,
    invalidNumOfPlayers,
    updateNumberOfPlayers,
    showLayout
  } = props;
  return (
    <div>
      <p>Start game by selecting number of players (Max 4 are allowed)</p>
      <div>
        <input
          type="number"
          onChange={updateNumberOfPlayers}
          value={numOfPlayers}
          max="4"
          min="2"
        />
        {invalidNumOfPlayers && (
          <p className="error">Please select a number between 2 and 4</p>
        )}
        <button
          className="m-l-20"
          disabled={invalidNumOfPlayers}
          onClick={showLayout}
        >
          {" "}
          START
        </button>
      </div>
    </div>
  );
};
