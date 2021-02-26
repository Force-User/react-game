import styles from "./bird.module.css";

const Bird = (props) => {
  return (
    <div
      className={styles.item}
      style={{ top: props.top, left: props.left }}
    ></div>
  );
};
export default Bird;
