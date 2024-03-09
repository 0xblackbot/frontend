import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import styles from "./MainScene.module.css";
import {Trail} from "./trail/Trail";

export const MainScene = () => {
    return (
        <div className={styles.container}>
            <div/>
            <Trail/>
            <Player src={'./scroll down.json'}
                    className={styles.scroll_down}
                    autoplay={true}
                    loop={true}/>
        </div>
    );
};