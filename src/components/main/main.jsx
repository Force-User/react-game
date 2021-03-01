import { NavLink, Route } from "react-router-dom";
import styles from "./main.module.css";
import clickSrc from "../../sounds/click.mp3";
const clickSound = new Audio();
clickSound.src = clickSrc;

const Main = (props) => {
    const handleClick = (e) => {
        clickSound.play();
    }
    return (
        <div className={styles.content}>
            <div className={styles.menu}>
               
                <NavLink onClick={handleClick} to="/game" className={styles.button}>Start</NavLink>
                <NavLink onClick={handleClick} to="/Main/settings" className={styles.button}>Settings</NavLink>
            </div>
          

        </div>
        
    )
}

export default Main;