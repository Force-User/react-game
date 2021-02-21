import styles from "./bird.module.css";
import React, { useEffect } from "react";

let timerFallBird = null;
const Bird = (props) => {
    if (props.status === "stop") {
        clearInterval(timerFallBird);
      }
    useEffect(() => {
        fallBird(props);
        console.log("birdEffect");
    },[])
   
    return (
        <div className={styles.item} style={{top:props.top}}></div>
    )
    
}

const fallBird = (props) => {
    timerFallBird = setInterval(() => {
      props.fallBird();
    }, 10);
  };

export default Bird;