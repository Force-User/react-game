import { NavLink } from "react-router-dom";
import styles from "./settings.module.css";

const Settings = (props) => {
  const handleClick = (e) => {
    const currentButton = e.target.closest("button");

    if (currentButton) {
        console.log(currentButton.dataset.difficulty);
      switch (currentButton.dataset.difficulty) {
        case "easy":
          props.setDifficulty("easy");
          break;
        case "normal":
          props.setDifficulty("normal");
          break;
        case "hard":
          props.setDifficulty("hard");
          break;
      }
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.menu}>
        <h1 className={styles.title}>Settings</h1>
        <div onClick={handleClick} className={styles.difficulty}>
          <button className={styles.difficultyButton} data-difficulty="easy">
            easy
          </button>
          <button className={styles.difficultyButton} data-difficulty="normal">
            medium
          </button>
          <button className={styles.difficultyButton} data-difficulty="hard">
            hard
          </button>
        </div>
        <NavLink to="/main">Back</NavLink>
      </div>
    </div>
  );
};

export default Settings;
