import React, { Component } from "react";
import "./App.css";
import Board from "./Board.js";
export default function App() {
  return (
    <>
      <div className="header_wrapper">1to50</div>
      <div className="board_wrapper">
        <div className="board_con">
          <Board />
        </div>
      </div>
    </>
  );
}
