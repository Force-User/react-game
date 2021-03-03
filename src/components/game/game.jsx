import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BirdContainer from "./bird/birdContainer";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";
import Score from "./score/score";
import wingSrc from "../../sounds/sfx_wing.ogg";
import dieSrc from "../../sounds/sfx_die.ogg";
import pointSrc from "../../sounds/sfx_point.ogg";
import hitSrc from "../../sounds/sfx_hit.ogg";
import clickSrc from "../../sounds/click.mp3";

const clickSound = new Audio();
const wingSound = new Audio();
const dieSound = new Audio();
const pointSound = new Audio();
const hitSound = new Audio();
clickSound.src = clickSrc;
wingSound.src = wingSrc;
dieSound.src = dieSrc;
pointSound.src = pointSrc;
hitSound.src = hitSrc;

let timerMoveAction = null;
let propsCopy = null;
let statistics = null;

const Game = (props) => {
  const text = React.createRef();
  statistics = React.createRef();
  propsCopy = props;

  useEffect(() => {
    clickSound.volume = props.volume;
    wingSound.volume = props.volume;
    dieSound.volume = props.volume;
    pointSound.volume = props.volume;
    hitSound.volume = props.volume;
    window.onblur = (e) => {
      props.gamePause();
    };
    window.onfocus = (e) => {
      props.gamePause();
    };
  }, []);

  useEffect(() => {
    move(props);
    createPipes(props);
  }, []);

  const handleClick = (e) => {
    if (props.status !== "pause" && e.target.dataset.name !== "pause") {
      text.current.style.display = "none";
      props.gameStart();
      props.flyBirdUp();
      wingSound.play();
    }
  };

  const handleKeyPress = (e) => {
    if (
      props.status !== "stop" &&
      e.code === "Space" &&
      props.status !== "pause"
    ) {
      props.gameStart();
      props.flyBirdUp();
      wingSound.play();
    }
  };
  const handleClickPause = (e) => {
    const element = e.target.closest("div");
    if (element.dataset.name) {
      clickSound.play();
      props.gamePause();
    }
  };

  return (
    <div
      tabIndex="0"
      onKeyPress={handleKeyPress}
      onClick={handleClick}
      data-name="game"
      className={styles.content}
      style={{ background: `url(${props.background}) center no-repeat` }}
    >
      <div
        onClick={handleClickPause}
        data-name="pause"
        className={styles.pause}
      >
        ||
      </div>
      <Score score={props.score.currentScore} />
      <span ref={text} className={styles.text}>
        Click to play
      </span>
      <BirdContainer />
      <NavLink ref={statistics} to="/statistics"></NavLink>
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
      <footer className={styles.footer}>
        <a href="https://rs.school/js/">
          <img
            className={styles.logo}
            src="https://rs.school/images/rs_school_js.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/ThisIsAntony">
          <img
            className={styles.logo}
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
            alt=""
          />
        </a>
        <span className={styles.text}>2021</span>
      </footer>
    </div>
  );
};

const move = () => {
  timerMoveAction = requestAnimationFrame(() => {
    if (propsCopy.status !== "stop" && propsCopy.birdStatus !== "stop-fall") {
      if (propsCopy.status === "play" && propsCopy.birdStatus === "fall") {
        propsCopy.fallBird();
        propsCopy.checkBirdToPipes(propsCopy.bird, propsCopy.pipes, hitSound);
        propsCopy.addScore(propsCopy.bird, propsCopy.pipes, pointSound);

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
        statistics.current.click();
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
    if (
      (props.status === "play" || props.birdFall === "fall") &&
      props.status !== "pause"
    ) {
      props.createPipes();
    }

    createPipes(propsCopy);
  }, 2000);
};

export default Game;
