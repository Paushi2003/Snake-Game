import React from "react";
import * as R from "ramda";
import { EachBox } from "./EachBox";

export const Layout = props => {
  // const { numOfPlayers } = props;
  const renderBoxes = props => {
    const { updatedState } = props;
    return R.pipe(
      R.splitEvery(10),
      R.addIndex(R.map)((row, index) => {
        return (
          <div className="box-row" key={index}>
            {R.map(box => {
              return (
                <div key={box} className="box">
                  <span>
                    <EachBox
                      boxIndex={box}
                      updatedState={updatedState}
                      numOfPlayers={updatedState.numOfPlayers}
                    />
                  </span>
                </div>
              );
            }, row)}
          </div>
        );
      })
    )(R.range(1, 101));
  };
  return <div className="board">{renderBoxes(props)}</div>;
};
