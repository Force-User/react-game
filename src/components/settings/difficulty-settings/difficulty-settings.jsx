import styles from "./difficulty-settings.module.css";
import clickSrc from "../../../sounds/click.mp3";

const clickSound = new Audio();
clickSound.src = clickSrc;

const Difficulty = (props) => {
  const handleClick = (e) => {
    const currentElement = e.target;
    clickSound.play();
    switch (currentElement.dataset.name) {
      case "easy":
        props.setSpeedBirdFall("easy");
        localStorage.setItem("difficulty", "easy");
        break;
      case "normal":
        props.setSpeedBirdFall("normal");

        localStorage.setItem("difficulty", "normal");
        break;
      case "hard":
        props.setSpeedBirdFall("hard");
        localStorage.setItem("difficulty", "hard");
        break;
    }
  };
  return (
    <ul onClick={handleClick} className={styles.difficulty}>
      <li>
        <button className={styles.difficultyButton} data-name="easy">
          easy
        </button>
      </li>
      <li>
        <button className={styles.difficultyButton} data-name="normal">
          medium
        </button>
      </li>
      <li>
        {" "}
        <button className={styles.difficultyButton} data-name="hard">
          hard
        </button>
      </li>
    </ul>
  );
};

export default Difficulty;
