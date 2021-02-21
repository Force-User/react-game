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
            status={props.status}
          />
        );
      })}

      <Ground />
    </div>
  );
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
