import { useEffect } from "react";
import Bird from "./bird/bird";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";
let timerGeneratPipes = null;
let propsCopy = null;
const Game = (props) => {
  propsCopy = props;
  if (props.status === "stop") {
    clearInterval(timerGeneratPipes);
  }
  useEffect(() => {
    move(props);
    createPipes(props);
  }, []);

  return (
    <div onClick={props.flyBirdUp} className={styles.content}>
      <Bird fallBird={props.fallBird} top={props.top} />

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
          />
        );
      })}

      <Ground />
    </div>
  );
};

const move = (props) => {
  setInterval(() => {
    props.fallBird();
    props.pipes.forEach((item) => {
      props.movePipes(item.id);
    })
  },10)
}

const createPipes = (props) => {
  if (props.status === "stop") {
    return;
  }
  setTimeout(() => {
    props.createPipes();
    createPipes(propsCopy);
    props.deletePipes();
  }, 5000);
};

export default Game;
