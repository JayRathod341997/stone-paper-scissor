import React, { Fragment, useState } from "react";
import classes from "./Main.module.css";
import Button from "./Button";
const Main = () => {
  const images = ["paper", "scissor", "stone"];
  const [players, setPlayers] = useState({
    player1: "paper",
    player2: "scissor",
  });
  //   console.log(players);
  let winner = "p1";
  const startBtnHandler = () => {
    const p1 = images[Math.floor(Math.random() * 3)];
    const p2 = images[Math.floor(Math.random() * 3)];
    console.log(p1, p2);

    if (p1 === "paper") {
      if (p2 === "scissor") {
        winner = "p2";
      } else if (p2 === "stone") {
        winner = "p1";
      } else {
        winner = "draw";
      }
    } else if (p1 === "stone") {
      if (p2 === "paper") {
        winner = "p2";
      } else if (p2 === "paper") {
        winner = "p1";
      } else {
        winner = "draw";
      }
    } else {
      //scissor
      if (p2 === "stone") {
        winner = "p2";
      } else if (p2 === "paper") {
        winner = "p1";
      } else {
        winner = "draw";
      }
    }

    console.log(winner);
    setPlayers((prev) => ({ ...prev, player1: p1, player2: p2 }));
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.box}>
          <label>Player 1</label>
          <img src={require(`../Images/${players.player1}.png`)} alt="paper" />

          <p>Player 1 selected </p>
        </div>
        <div className={classes.box}>
          <label>Player 2</label>
          <img
            src={require(`../Images/${players.player2}.png`)}
            alt="scissor"
          />

          <p>Player 2 selected </p>
        </div>
      </div>
      <Button onClick={startBtnHandler}></Button>
    </Fragment>
  );
};

export default Main;
