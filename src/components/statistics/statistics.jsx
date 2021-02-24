import { NavLink } from "react-router-dom";
import styles from "./statistics.module.css";


const Statistics = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.block}>
                <h2 className={styles.title}>Statistics</h2>
                <span className={styles.score}>50</span>
                <div className={styles.buttonBlock}>
                    <NavLink to="/Main">Main menu</NavLink>
                    <NavLink to="/game">Restart</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Statistics;