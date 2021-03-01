import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./statistics.module.css";
import clickSrc from "../../sounds/click.mp3";
const clickSound = new Audio();
clickSound.src = clickSrc;

const RecordsItem = (props) => {
  return (
    <li className={styles.recordsItem}>
      <span className={styles.place}>{props.place}</span>
      <span className={styles.placeScore}>{props.score}</span>
    </li>
  );
};

const Statistics = (props) => {
  const handleClick = (e) => {
    const currentElement = e.target.closest("a");
    if (currentElement) {
      clickSound.play();
      props.resetGame();
      props.resetBird();
      props.resetPipes();
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <h2 className={styles.title}>Statistics</h2>
        <span className={styles.score}>{props.score}</span>
        <ul className={styles.records}>
        {props.scoreBox.map((item) => {
          return <RecordsItem key={item.id} place={item.id} score={item.score} />
        })}
        </ul>
        <div onClick={handleClick} className={styles.buttonBlock}>
          <NavLink className={styles.link} to="/Main">
            Main menu
          </NavLink>
          <NavLink className={styles.link} to="/game">
            Restart
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
