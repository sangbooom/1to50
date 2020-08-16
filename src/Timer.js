import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Timer() {
  const [time, setTime] = useState(0);
  const finishTime = useRef();
  finishTime.current = time;
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 30);
    }, 30);
    return () => {
      alert(`your record : ${finishTime.current / 1000}`);
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      <Front>{parseInt(time / 1000)}</Front> :<Back>{(time % 1000) / 10}</Back>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Front = styled.div`
  text-align: right;
`;

const Back = styled.div`
  width: 1em;
`;

export default Timer;