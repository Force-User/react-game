import styles from "./bird.module.css";
import React from "react";

const Bird = (props) => {
   
    return (
        <div className={styles.item} style={{top:props.top}}></div>
    )
}

export default Bird;