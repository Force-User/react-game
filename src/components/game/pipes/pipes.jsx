import styles from "./pipes.module.css";
import pipe from "../../../assets/pipe.png";
import React, { useEffect } from "react";

let status = null;
let timerMovePipes = null;

const Pipes = (props) => {
  if (status === "stop") {
    clearInterval(timerMovePipes);
  }
  status = props.status;
  useEffect(() => {
    movePipes(props);
  }, []);
  return (
    <div
      className={styles.content}
      style={{ right: props.right , top: props.top}}
    >
      <img className={`${styles.itemTop} ${styles.item}`} src={pipe} />
      <img className={`${styles.itemBottom} ${styles.item}`} src={pipe} />
    </div>
  );
};

const movePipes = (props) => {
  timerMovePipes = setInterval(() => {
    props.movePipes(props.id);
  }, 10);
};

export default Pipes;
