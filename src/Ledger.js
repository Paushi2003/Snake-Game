import React from "react";

export const Ledger = () => {
  return (
    <div>
      <h2>Below is the Ledger</h2>
      <ul>
        <li> Alerts when caught by snake or going up the ladder</li>
        <li>
          Ending positions are mentioned in alert for both snake and ladder
        </li>
        <li>
          Snake and Ladder starting positions are highlighted in box, ending
          positions can be seen in js file.
        </li>
        <li>
          When any one of the players position crosses 100, game is considred
          over
        </li>
        <li>Once game is over, initial screen rendered to start again</li>
      </ul>
      <div className="ledger-player">
        Player 1 is <div className="P1_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Player 2 is <div className="P2_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Player 3 is <div className="P3_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Player 4 is <div className="P4_shape m-l-20" />
      </div>
    </div>
  );
};
