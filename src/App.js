import './App.css';
import Container from './components/Container';
import Dice from './components/Dice';
import Winner from './components/Winner';
import pictures from './components/Assets';
import { useState } from 'react';
import ChoseWinner from './components/ChoseWinner';


function random() {
  return Math.floor(Math.random() * 6);
}

function App() {
  const [diceA, setDiceA] = useState(pictures[5]);
  const [diceB, setDiceB] = useState(pictures[5]);
  const [winner, setWinner] = useState(-1)

  const rollTheDice = () => {
    let a = random();
    let b = random();
    if (a === b) {
      setWinner(0)
    } else if (a > b) {
      setWinner(1);
    } else {
      setWinner(2)
    }
    setDiceA(pictures[a]);
    setDiceB(pictures[b]);
  }
  return (<>
    <Container>
      <Winner winnerName={winner}></Winner>
      <Dice image={diceA}>Player 1</Dice>
      <Dice image={diceB}>Player 2</Dice>
      <ChoseWinner roll={rollTheDice}></ChoseWinner>
    </Container>
  </>
  );
}

export default App;
