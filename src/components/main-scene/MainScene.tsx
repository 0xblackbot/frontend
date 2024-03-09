import React, {FC} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import styles from "./MainScene.module.css";
import {Trail} from "./trail/Trail";
import {ChangeCursorVariantProps} from "../../hooks/use-cursor-variant.hook";

export const MainScene: FC<ChangeCursorVariantProps> = ({onMouseEnter, onMouseLeave}) => {
    return (
        <div className={styles.container}>
            <div/>
            <Trail onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            <Player src={'./scroll down.json'}
                    className={styles.scroll_down}
                    autoplay={true}
                    loop={true}/>
        </div>
    );
};