import React from "react";
import { snakePositions, ladderPositions } from "./SnakeAndLadderPositions";

export const EachBox = props => {
  const { boxIndex, updatedState } = props;
  const { numOfPlayers } = updatedState;
  const getPlayerNamesArr = () => {
    let arr = [];
    for (let i = 1; i <= numOfPlayers; i++) {
      arr.push(`P${i}`);
    }
    return arr;
  };
  const checkIfSnakeOrLadderPresent = () => {
    let a = "";
    snakePositions.forEach(snake => {
      if (snake.currentPosition === boxIndex) {
        a = <div className="snake">S</div>;
      }
    });
    ladderPositions.forEach(ladder => {
      if (ladder.currentPosition === boxIndex) {
        a = <div className="ladder">L</div>;
      }
    });
    return a;
  };
  return (
    <div className="each-box">
      <div className="icons-in-box">
        {getPlayerNamesArr().map(playerName => {
          return (
            updatedState[playerName].currentPosition === boxIndex && (
              <div className={`${playerName}_shape`} />
            )
          );
        })}
      </div>
      {checkIfSnakeOrLadderPresent()}
      <div style={{ fontSize: "10px" }}>{boxIndex}</div>
    </div>
  );
};
