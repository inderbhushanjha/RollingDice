import React from "react";

export default function Dice(props) {
  return (
    <div className="dice">
      <p>{props.children}</p>
      <img src={props.image} alt="rolling dice" />
    </div>
  );
}
