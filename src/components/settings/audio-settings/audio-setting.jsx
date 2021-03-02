import styles from "./audio-settings.module.css";

const AudioSettings = (props) => {
    const handleChange = (e) => {
        props.setVolume(e.target.value);
      }
  return (
    <div className={styles.audioSettings}>
      <div>
        
        <span className={styles.text}>Effects</span>
        <input
          onChange={handleChange}
          type="range"
          min="1"
          max="100"
          value="100"
          className={styles.audioRange}
        />
      </div>
      <div>
        {" "}
        <span className={styles.text}>Sound off</span> <input type="checkbox" />
      </div>
    </div>
  );
};

export default AudioSettings;
