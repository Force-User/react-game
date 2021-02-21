import { useEffect } from "react";
import Bird from "./bird/bird";
import styles from "./game.module.css";
import Ground from "./ground/ground";
import Pipes from "./pipes/pipes";

const Game = (props) => {
    useEffect(() => {
        fallBird(props);
    },[])
    return (
        <div onClick={props.flyBirdUp} className={styles.content}>
            <Bird top={props.top}/>
            <Pipes/>
            <Ground/>
        </div>
    )
}

const fallBird = (props) => {
    setInterval(() => {
        props.fallBird();
    },10)
}

export default Game;