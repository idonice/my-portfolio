import React from "react";

function TicTacToeDescription() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>
        React | Node | Socket.io <br />
      </p>
      <a className="app-nav" href="https://tic-tac-toe-acvm.onrender.com/">
        go to app
      </a>
    </div>
  );
}

export default TicTacToeDescription;
