import { NavLink } from "react-router-dom";
import styles from "./settings.module.css";

const Settings = (props) => {
  const handleClick = (e) => {
   const  currentElement = e.target;
    switch (currentElement.dataset.name) {
      case "standart":
        props.setSkin(currentElement.dataset.name);
        break;
      case "head":
        props.setSkin(currentElement.dataset.name);
        break;
      case "dragon":
        props.setSkin(currentElement.dataset.name);
        break;
      case "day":
        props.setBackground(currentElement.dataset.name);
        break;
      case "night":
        props.setBackground(currentElement.dataset.name);
        break;
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
  };

  return (
    <div className={styles.settings}>
      <div className={styles.menu}>
        <h1 className={styles.settingsTitle}>Settings</h1>
        <ul onClick={handleClick} className={styles.difficulty}>
          <li>
            <button className={styles.difficultyButton} data-difficulty="easy">
              easy
            </button>
          </li>
          <li>
            <button
              className={styles.difficultyButton}
              data-difficulty="normal"
            >
              medium
            </button>
          </li>
          <li>
            {" "}
            <button className={styles.difficultyButton} data-difficulty="hard">
              hard
            </button>
          </li>
        </ul>
        <h3 className={styles.settingsTitle}>Audio settings</h3>
        <div className={styles.audioSettings}>
          <div>
            {" "}
            Music <input type="range" className={styles.audioRange} />
          </div>
          <div>
            {" "}
            Effects <input type="range" className={styles.audioRange} />
          </div>
        </div>
        <h3 className={styles.settingsTitle}>Bird skins</h3>
        <ul
          onClick={handleClick}
          data-name="skins"
          className={styles.settingsBlock}
        >
          <li>
            <img
              className={styles.settingsBlockItem}
              data-name="standart"
              src="https://www.pngkey.com/png/full/325-3257134_flappy-bird-flappy-bird-sprite-png.png"
              alt=""
            />
          </li>
          <li>
            <img
              className={styles.settingsBlockItem}
              data-name="head"
              src="https://www.pngkey.com/png/full/151-1515297_blue-flappy-bird-flappy-bird-new-sprite-bird.png"
              alt=""
            />
          </li>
          <li>
            <img
              className={styles.settingsBlockItem}
              data-name="dragon"
              src="https://www.pngkey.com/png/full/549-5494704_flappy-bird-flippy-monster-game-monster-app-flappy.png"
              alt=""
            />
          </li>
        </ul>
        <h3 className={styles.settingsTitle}>Background</h3>
        <ul onClick={handleClick} className={styles.settingsBlock}>
          <li>
            {" "}
            <img
              data-name="day"
              src="https://wallpapercave.com/wp/wp6956942.png"
              alt=""
              className={styles.settingsBlockItem}
            />
          </li>
          <li>
            {" "}
            <img
              data-name="night"
              src="https://images.alphacoders.com/966/thumb-1920-966313.jpg"
              alt=""
              className={styles.settingsBlockItem}
            />{" "}
          </li>
        </ul>
        <NavLink className={styles.back} to="/main">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Settings;
