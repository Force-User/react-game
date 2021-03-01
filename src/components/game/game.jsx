import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BirdContainer from "./bird/birdContainer";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";
import Score from "./score/score";
import wingSrc from "../../sounds/sfx_wing.ogg";
import dieSrc from "../../sounds/sfx_die.ogg";
import pointSrc from "../../sounds/sfx_point.ogg"
import hitSrc from "../../sounds/sfx_hit.ogg";
const wingSound = new Audio();
const dieSound = new Audio();
const pointSound = new Audio();
const hitSound = new Audio();

wingSound.src = wingSrc;
dieSound.src = dieSrc;
pointSound.src = pointSrc;
hitSound.src = hitSrc;


let timerMoveAction = null;
let propsCopy = null;
let stat;

const Game = (props) => {
  stat = React.createRef();
  propsCopy = props;

  const handleClick = () => {
    if(props.status !== "pause") {
      props.gameStart();
      props.flyBirdUp();
      wingSound.play();
    }
   
  };

  const handleKeyPress = (e) => {
    if (props.status !== "stop" && e.code === "Space" && props.status !== "pause") {
      props.gameStart();
      props.flyBirdUp();
      wingSound.play();
    }
  };
  const handleClickPause = (e) => {
    const element = e.target.closest("div");
    if (element) {
      props.gamePause();
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
      <div onClick={handleClickPause} className={styles.pause}>
        ||
      </div>
      <Score score={props.score.currentScore} />
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
        propsCopy.checkBirdToPipes(propsCopy.bird, propsCopy.pipes,hitSound);
        propsCopy.addScore(propsCopy.bird, propsCopy.pipes,pointSound);

        propsCopy.pipes.forEach((item) => {
          propsCopy.movePipes(item.id);
        });
      }
      requestAnimationFrame(move);
    } else if (propsCopy.status && propsCopy.status !== "pause") {
      dieSound.play();
      propsCopy.gameEnd();
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
    if ((props.status === "play" || props.birdFall === "fall") && props.status !== "pause") {
      props.createPipes();
    }

    createPipes(propsCopy);
  }, 2000);
};

export default Game;
