import React, { useState, Component } from "react";

const Board = () => {
  const num = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
  ];

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  shuffle(num);

  const numList = num.map((number) => (
    <div className="board" key={number}>
      {number}
    </div>
  ));
  return (
    <>
      <div className="board_con">{numList}</div>
    </>
  );
};

export default Board;
