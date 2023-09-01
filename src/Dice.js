import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class Dice extends React.Component {
  rollAll = () => {
    this.reactDice.rollAll();
  };
  rollDoneCallback = num => {
    const { rollDice } = this.props;
    rollDice(num);
  };
  render() {
    return (
      <>
        <ReactDice
          numDice={1}
          rollDone={this.rollDoneCallback}
          ref={dice => (this.reactDice = dice)}
        />
        <button onClick={this.rollAll}>Roll Dice</button>
      </>
    );
  }
}

export default Dice;
