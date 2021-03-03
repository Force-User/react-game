import { NavLink } from "react-router-dom";
import styles from "./settings.module.css";
import clickSrc from "../../sounds/click.mp3";
import Difficulty from "./difficulty-settings/difficulty-settings";
import AudioSettings from "./audio-settings/audio-setting";
import CustomizationSettings from "./customization-settings/customization-settings";
const clickSound = new Audio();
clickSound.src = clickSrc;

const Settings = (props) => {
  const handleClick = (e) => {
    const currentElement = e.target;
    clickSound.play();
    switch (currentElement.dataset.name) {
      case "standart":
        props.setSkin(currentElement.dataset.name);
        localStorage.setItem("birdSkin", "standart");
        break;
      case "head":
        props.setSkin(currentElement.dataset.name);
        localStorage.setItem("birdSkin", "head");
        break;
      case "dragon":
        props.setSkin(currentElement.dataset.name);
        localStorage.setItem("birdSkin", "dragon");
        break;
      case "day":
        props.setBackground(currentElement.dataset.name);
        localStorage.setItem("background", "day");
        break;
      case "night":
        props.setBackground(currentElement.dataset.name);
        localStorage.setItem("background", "night");
        break;
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.menu}>
        <h1 className={styles.settingsTitle}>Settings</h1>
        <Difficulty setSpeedBirdFall={props.setSpeedBirdFall} />
        <h3 className={styles.settingsTitle}>Audio settings</h3>
        <AudioSettings volume={props.volume} setVolume={props.setVolume} />
        <h3 className={styles.settingsTitle}>Bird skins</h3>
        <ul
          onClick={handleClick}
          data-name="skins"
          className={styles.settingsBlock}
        >
          {props.birdSettings.map((item) => {
            return (
              <CustomizationSettings
                key={item.id}
                name={item.name}
                path={item.path}
              />
            );
          })}
        </ul>
        <h3 className={styles.settingsTitle}>Background</h3>
        <ul onClick={handleClick} className={styles.settingsBlock}>
          {props.backgroundSettings.map((item) => {
            return (
              <CustomizationSettings
                key={item.id}
                name={item.name}
                path={item.path}
              />
            );
          })}
        </ul>
        <NavLink onClick={handleClick} className={styles.back} to="">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Settings;
