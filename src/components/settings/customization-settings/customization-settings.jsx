import styles from "./customization-settings.module.css";

const CustomizationSettings = (props) => {


    return (
        <li>
            <img
              className={styles.settingsBlockItem}
              data-name={props.name}
              src={props.path}
              alt=""
            />
          </li>
    )
}

export default CustomizationSettings;