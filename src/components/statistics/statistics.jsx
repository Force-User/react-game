import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./statistics.module.css";


const Statistics = (props) => {
    const handleClick = (e) => {
        const currentElement = e.target.closest("a");
        if(currentElement) {
            props.resetGame();
            props.resetBird();
            props.resetPipes();
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.block}>
                <h2 className={styles.title}>Statistics</h2>
                <span className={styles.score}>{props.score}</span>
                <div onClick={handleClick} className={styles.buttonBlock}>
                    <NavLink to="/Main">Main menu</NavLink>
                    <NavLink to="/game">Restart</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Statistics;