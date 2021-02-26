import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Bird from "./bird/bird";
import BirdContainer from "./bird/birdContainer";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";
import Score from "./score/score";

let timerMoveAction = null;
let propsCopy = null;
let stat;

const Game = (props) => {
  stat = React.createRef();
  propsCopy = props;

  const handleClick = () => {
    props.gameStart();
    props.flyBirdUp();
  };

  const handleKeyPress = (e) => {
    if (props.status !== "stop" && e.code === "Space") {
      props.gameStart();
      props.flyBirdUp();
    }
  };

  useEffect(() => {
    move(props);
    createPipes(props);
  }, []);

  return (
    <div
      tabIndex="0"
      onKeyPress={handleKeyPress}
      onClick={handleClick}
      className={styles.content}
      style={{ background: `url(${props.background}) center no-repeat` }}
    >
      <Score score={props.score} />
      <BirdContainer />
      <NavLink ref={stat} to="/statistics"></NavLink>
      {props.pipes.map((item) => {
        return (
          <Pipes
            id={item.id}
            key={item.id}
            top={item.y}
            right={item.x}
            leftSide={props.leftSide}
            status={props.status}
            setVerticalPosition={props.setVerticalPosition}
          />
        );
      })}

      <Ground />
    </div>
  );
};

const move = () => {
  timerMoveAction = requestAnimationFrame(() => {
    if (propsCopy.status !== "stop" && propsCopy.birdStatus !== "stop-fall") {
      if (propsCopy.status === "play" && propsCopy.birdStatus === "fall") {
        propsCopy.fallBird();
        propsCopy.checkBirdToPipes(propsCopy.bird, propsCopy.pipes);
        propsCopy.addScore(propsCopy.bird, propsCopy.pipes);
        propsCopy.pipes.forEach((item) => {
          propsCopy.movePipes(item.id);
        });
      }

      requestAnimationFrame(move);
    } else if (propsCopy.status) {
      cancelAnimationFrame(timerMoveAction);
      setTimeout(() => {
        stat.current.click();
      }, 100);

      return;
    }
  });
};

const createPipes = (props) => {
  if (props.status === "stop" || props.birdFall === "stop-fall") {
    return;
  }
  setTimeout(() => {
    if (props.status === "play" || props.birdFall === "fall") {
      props.createPipes();
    }

    createPipes(propsCopy);
  }, 2000);
};

export default Game;
