import React, { useState, Component } from "react";

const Board = () => {
  const shuffle = () => {
    const a = [];
    for (let i = 1; i <= 25; i++) {
      a.push(i);
    }

    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const numList = shuffle().map((number) => (
    <div className="board" key={number}>
      {number}
    </div>
  ));
  
  return (
    <div className="board_con">{numList}</div>
  );
};

export default Board;
