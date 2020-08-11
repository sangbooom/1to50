import React from "react";
import styled from "styled-components";

function Cell({ num, handleClick }) {
  return (
    <Container onClick={() => handleClick(num)}>
      {num < 10 ? `0${num}` : `${num}`}
    </Container>
  );
}

const Container = styled.div`
  width: 140px;
  height: 140px;
  border: 1px solid black;
  text-align: center;
  font-size: 100px;
`;

export default Cell;
