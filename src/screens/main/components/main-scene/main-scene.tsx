import {Player} from "@lottiefiles/react-lottie-player";
import React, {useRef} from "react";

import styles from "./main-scene.module.css";
import {Trail} from "./trail/trail";
import {useCursorVariant} from "../../../../hooks/cursor-variant/cursor-variant.hook";

export const MainScene = () => {
    const {onMouseEnter, onMouseLeave} = useCursorVariant();

    const bottomRef = useRef<HTMLDivElement | null>(null);

    const handleClick = () => bottomRef.current?.scrollIntoView({behavior: 'smooth'});

    return (
        <>
            <div className={styles.container}>
                <div/>
                <Trail/>
                <div className={styles.scroll_down}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                     onClick={handleClick}>
                    <Player src={'./scroll down.json'}
                            autoplay={true}
                            loop={true}/>
                </div>
            </div>
            <div ref={bottomRef}/>
        </>
    );
};