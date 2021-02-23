import styles from "./pipes.module.css";
import pipe from "../../../assets/pipe.png";
import React, { useEffect } from "react";

const Pipes = (props) => {
  const pipeTop = React.createRef();
  const pipeBottom = React.createRef();
  useEffect(() => {
    console.log(1);
    props.setMetricPipe(
      props.id,
      pipeTop.current.getBoundingClientRect().top,
      pipeBottom.current.getBoundingClientRect().bottom
    );
  }, []);
  return (
    <div
      className={styles.content}
      style={{ right: props.right, top: props.top }}
    >
      <img
        ref={pipeBottom}
        className={`${styles.itemTop} ${styles.item}`}
        src={pipe}
      />
      <img
        ref={pipeTop}
        className={`${styles.itemBottom} ${styles.item}`}
        src={pipe}
      />
    </div>
  );
};

export default Pipes;
