import React, { Fragment, useState } from "react";
import classes from "./Main.module.css";
import Button from "./Button";
const Main = () => {
  const images = ["paper", "scissor", "stone"];
  const [players, setPlayers] = useState({
    player1: "paper",
    player2: "scissor",
  });

  const [isFirstPlayerWin, setIsFirstPlayerWin] = useState(true);
  const [draw, setDraw] = useState(false);
  //   console.log(players);

  const startBtnHandler = () => {
    const p1 = images[Math.floor(Math.random() * 3)];
    const p2 = images[Math.floor(Math.random() * 3)];
    console.log(p1, p2);

    setPlayers((prev) => ({ ...prev, player1: p1, player2: p2 }));

    if (p1 === p2) {
      setDraw(true);
      return;
    }
    setDraw(false);
    if (p1 === "paper") {
      if (p2 === "scissor") {
        setIsFirstPlayerWin(false);
      } else {
        setIsFirstPlayerWin(true);
      }
    } else if (p1 === "stone") {
      if (p2 === "paper") {
        setIsFirstPlayerWin(false);
      } else {
        setIsFirstPlayerWin(true);
      }
    } else {
      //scissor
      if (p2 === "stone") {
        setIsFirstPlayerWin(false);
      } else {
        setIsFirstPlayerWin(true);
      }
    }
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.box}>
          <label>Player 1</label>
          <img
            src={require(`../Images/${players.player1}.png`)}
            alt={`${players.player1}`}
          />

          <p>{players.player1.toUpperCase()}</p>
        </div>
        <div className={classes.box}>
          <label>Player 2</label>
          <img
            src={require(`../Images/${players.player2}.png`)}
            alt={`${players.player2}`}
          />
          <p>{players.player2.toUpperCase()} </p>
        </div>
      </div>

      <div className={classes.main}>
        {draw && <p1>Both players have selected the same</p1>}
        {!draw && isFirstPlayerWin && <p1>Winner is Player 1</p1>}
        {!draw && !isFirstPlayerWin && <p1>Winner is Player 2</p1>}
      </div>

      <Button onClick={startBtnHandler}></Button>
    </Fragment>
  );
};

export default Main;
