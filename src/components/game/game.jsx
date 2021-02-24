import React,{ useEffect } from "react";
import { NavLink } from "react-router-dom";
import Bird from "./bird/bird";
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
  useEffect(() => {
    document.body.addEventListener("keypress", (e) => {
      if (e.code === "Space" && props.status !== "stop") {
        props.flyBirdUp();
      }
    });
    move(props);
    createPipes(props);
  }, []);


  return (
    <div onClick={props.flyBirdUp} className={styles.content}>
      <Score score={props.score} />
      <Bird fallBird={props.fallBird} top={props.top} />
      <NavLink ref={stat} to="/statistics"></NavLink>
      {props.pipes.map((item) => {
        return (
          <Pipes
            id={item.id}
            key={item.id}
            top={item.y}
            right={item.x}
            movePipes={props.movePipes}
            leftSide={props.leftSide}
            status={props.status}
            setMetricPipe={props.setMetricPipe}
          />
        );
      })}

      <Ground />
    </div>
  );
};

const move = () => {
  timerMoveAction = requestAnimationFrame(() => {
    if (propsCopy.status !== "stop") {
      if (propsCopy.status === "play") {
        propsCopy.fallBird();
        propsCopy.checkBirdToPipes();
        propsCopy.addScore();
        propsCopy.pipes.forEach((item) => {
          propsCopy.movePipes(item.id);
        });
      }

      requestAnimationFrame(move);
    } else {
      cancelAnimationFrame(timerMoveAction);
      setTimeout(() => {
        stat.current.click();
      },1000)
      

     
      return;
    }
  });

  // timerMoveAction = setInterval(() => {
  //   props.fallBird();
  //   props.checkBirdToPipes();
  //   propsCopy.pipes.forEach((item) => {
  //     props.movePipes(item.id);
  //   });
  // }, 40);
};

const createPipes = (props) => {
  if (props.status === "stop") {
    return;
  }
  setTimeout(() => {
    props.createPipes();
    createPipes(propsCopy);
  }, 3000);
};

export default Game;
