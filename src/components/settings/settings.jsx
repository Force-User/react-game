import { NavLink } from "react-router-dom";
import styles from "./settings.module.css";

const Settings = (props) => {
  const handleClick = (e) => {
    const currentButton = e.target.closest("button");
    const currentSkin = e.target;

    switch(currentSkin.dataset.name) {
      case "standart":
        props.setSkin(currentSkin.dataset.name);
      break;
      case "head":
        props.setSkin(currentSkin.dataset.name);
      break;
      case "dragon":
        props.setSkin(currentSkin.dataset.name);
      break;
    }

    if (currentButton) {
      switch (currentButton.dataset.difficulty) {
        case "easy":
          props.setSpeedBirdFall("easy");
          break;
        case "normal":
          props.setSpeedBirdFall("normal");
          break;
        case "hard":
          props.setSpeedBirdFall("hard");
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
        <h3 className={styles.audioTitile}>Anudio settings</h3>
        <div className={styles.audioSettings}>
         
          <div> Music <input type="range" className={styles.audioRange} /></div>
          <div> Effects <input type="range" className={styles.audioRange} /></div>
         
         
        </div>
        <h3 className={styles.birdTitle}>Bird skins</h3>
        <div onClick={handleClick} data-name="skins" className={styles.birdSettings}>
          <div className={styles.skin} data-name="standart"></div>
          <div className={styles.skin} data-name="head"></div>
          <div className={styles.skin} data-name="dragon"></div>
        </div>
        <NavLink className={styles.back} to="/main">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Settings;
