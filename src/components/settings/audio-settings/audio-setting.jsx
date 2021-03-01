import styles from "./audio-settings.module.css";

const AudioSettings = (props) => {
    const handleChange = (e) => {
        props.setVolume(e.target.value);
      }
  return (
    <div className={styles.audioSettings}>
      <div>
        {" "}
        Effects{" "}
        <input
          onChange={handleChange}
          type="range"
          min="1"
          max="100"
          className={styles.audioRange}
        />
      </div>
      <div>
        {" "}
        Sound off <input type="checkbox" />
      </div>
    </div>
  );
};

export default AudioSettings;
