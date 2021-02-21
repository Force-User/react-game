import Bird from "./bird/bird";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";

const Game = (props) => {
    return (
        <div className={styles.content}>
            <Bird/>
            <Pipes/>
            <Ground/>
        </div>
    )
}

export default Game;