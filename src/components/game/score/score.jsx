import styles from "./score.module.css";

const Score = (props) => {
  return <span className={styles.item}>{props.score}</span>;
};

export default Score;
