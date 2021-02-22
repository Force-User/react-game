import styles from "./pipes.module.css";
import pipe from "../../../assets/pipe.png";

const Pipes = (props) => {
  return (
    <div
      className={styles.content}
      style={{ right: props.right, top: props.top }}
    >
      <img className={`${styles.itemTop} ${styles.item}`} src={pipe} />
      <img className={`${styles.itemBottom} ${styles.item}`} src={pipe} />
    </div>
  );
};

export default Pipes;
