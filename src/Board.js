import React, { useState, Component } from "react";
// import ChangeNum from "./ChangeNum";

const Board = () => {
  const [info, setInfo] = useState([
    { num: 1, visited: "true" },
    { num: 2, visited: "true" },
    { num: 3, visited: "true" },
    { num: 4, visited: "true" },
    { num: 5, visited: "true" },
    { num: 6, visited: "true" },
    { num: 7, visited: "true" },
    { num: 8, visited: "true" },
    { num: 9, visited: "true" },
    { num: 10, visited: "true" },
    { num: 11, visited: "true" },
    { num: 12, visited: "true" },
    { num: 13, visited: "true" },
    { num: 14, visited: "true" },
    { num: 15, visited: "true" },
    { num: 16, visited: "true" },
    { num: 17, visited: "true" },
    { num: 18, visited: "true" },
    { num: 19, visited: "true" },
    { num: 20, visited: "true" },
    { num: 21, visited: "true" },
    { num: 22, visited: "true" },
    { num: 23, visited: "true" },
    { num: 24, visited: "true" },
    { num: 25, visited: "true" },
  ]);

  const [nextInfo, setNextInfo] = useState([
    { num: 26, visited: "true" },
    { num: 27, visited: "true" },
    { num: 28, visited: "true" },
    { num: 29, visited: "true" },
    { num: 30, visited: "true" },
    { num: 31, visited: "true" },
    { num: 32, visited: "true" },
    { num: 33, visited: "true" },
    { num: 34, visited: "true" },
    { num: 35, visited: "true" },
    { num: 36, visited: "true" },
    { num: 37, visited: "true" },
    { num: 38, visited: "true" },
    { num: 39, visited: "true" },
    { num: 40, visited: "true" },
    { num: 41, visited: "true" },
    { num: 42, visited: "true" },
    { num: 43, visited: "true" },
    { num: 44, visited: "true" },
    { num: 45, visited: "true" },
    { num: 46, visited: "true" },
    { num: 47, visited: "true" },
    { num: 48, visited: "true" },
    { num: 49, visited: "true" },
    { num: 50, visited: "true" },
  ]);

  const infoNumList = info.map((number) => number.num);
  const infoNextNumList = nextInfo.map((number) => number.num);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffle(infoNumList);
  shuffle(infoNextNumList);

  //   onChange = () => {
  //     if (infoNextNumList.length > 0) {
  //       var randomNextNum = infoNextNumList.shift();
  //     } else {
  //       //game over
  //     }
  //   };

  //   const getCellValue = () => {
  //     const numList = infoNumList.map((number) => (
  //       <div className="board" key={number}>
  //         {number}
  //       </div>
  //     ));

  //     const nextNumList = infoNextNumList.map((number) => (
  //       <div className="board" key={number}>
  //         {number !== 0 ? number : null}
  //       </div>
  //     ));
  //     if()
  //     if()
  //     return
  //   };
  const numList = infoNumList.map((number) => (
    <div className="board" key={number}>
      {number}
    </div>
  ));

  return <>{numList}</>;
};

export default Board;
