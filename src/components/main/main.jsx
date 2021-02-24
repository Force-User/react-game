import { NavLink, Route } from "react-router-dom";
import styles from "./main.module.css";

const Main = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.menu}>
                <h1 className={styles.title}>flappy bird</h1>
                <NavLink to="/game" className={styles.button}>Start</NavLink>
                <NavLink to="/Main/settings" className={styles.button}>Settings</NavLink>
            </div>
          

        </div>
        // <NavLink to="/game" className="main"></NavLink>
    )
}

export default Main;