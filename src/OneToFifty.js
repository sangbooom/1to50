import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

let array1 = [];
for (let i = 1; i <= 25; i++) {
  array1.push(i);
}

let array2 = [];
for (let i = 26; i <= 50; i++) {
  array2.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array1);
  const [nextNumbers, setNextNumbers] = useState(array2);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const [newArray] = useState([]);
  
  const handleClick = (num) => {
    if (num === current && gameFlag) {
      if (num === 50) {
        alert("개못하네 ㅋㅋ");
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers((numbers) => [
        ...numbers.slice(0, index),
        num < 26 ? newArray.shift() : null,
        ...numbers.slice(index + 1),
      ]);
      console.log(newArray);

      setCurrent(current + 1);
    }
  };
  const startGame = () => {
    setNumbers(shuffleArray(array1));
    setNextNumbers(shuffleArray(array2));
    numnumArray(newArray,nextNumbers);
    setCurrent(1);
    setGameFlag(true);
  };
  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <Container>
      <Text>1to50</Text>
      <Board numbers={numbers} handleClick={handleClick}></Board>
      <StartButton onClick={startGame}>start</StartButton>
    </Container>
  );
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const numnumArray = (newArray,nextNumbers) => {
  for (var i = 1; i <= nextNumbers.length; i++) {
    newArray.push(nextNumbers[i - 1]);
    newArray.push(nextNumbers[i - 1]);
  }
};

const Text = styled.div`
  font-size: 110px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StartButton = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
`;

export default OneToFifty;
