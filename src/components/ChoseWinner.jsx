import React from "react";

export default function ChoseWinner(props) {
  const clickHandler = () => {
    props.roll();
  };
  return (
    <div>
      <button className="button-1" onClick={clickHandler}>
        Roll
      </button>
    </div>
  );
}
