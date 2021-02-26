import styles from "./bird.module.css";

const Bird = (props) => {
  return (
    <div
      className={styles.item}
      style={{ top: props.top, left: props.left, background: `url(${props.skin}) center no-repeat`, backgroundSize:"contain"}}
    ></div>
  );
};
export default Bird;
