import React from "react";
import WinnerName from "./WinnerName";

export default function Winner(props) {
  const { winnerName } = props;
  return (
    <div>
      {winnerName === -1 ? (
        <WinnerName winnerName={"Click To Roll"} />
      ) : winnerName === 0 ? (
        <WinnerName winnerName={"Draw"} />
      ) : winnerName === 1 ? (
        <WinnerName winnerName={"🚩 Player 1 Wins!"} />
      ) : (
        <WinnerName winnerName={"Player 2 Wins! 🚩"} />
      )}
    </div>
  );
}
