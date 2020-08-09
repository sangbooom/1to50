import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({ numbers, handleClick }) {
  return (
    <Container>
      {numbers.map((num, index) => (
        <Cell num={num} key={index} handleClick={handleClick}></Cell>
      ))}
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid black;
  height: 710px;
  width: 100%;
  max-width: 710px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

export default Board;
