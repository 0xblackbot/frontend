import React, {useCallback, useRef} from "react";
import styles from './Trail.module.css';
import {animated, useTrail} from "@react-spring/web";
import {useCursorVariant} from "../../../hooks/cursor-variant/cursor-variant.hook";

const LETTERS = ['B', 'L', 'A', 'C', 'K', 'B', 'O', 'T'];

export const Trail = () => {
    const {onMouseEnter, onMouseLeave} = useCursorVariant();

    const [trail, api] = useTrail(
        LETTERS.length,
        () => (
            {rotateX: 0}
        )
    );
    const isFlipped = useRef(false);

    const handleClick = useCallback(
        () => {
            if (isFlipped.current) {
                api.start({rotateX: 0});
                isFlipped.current = false;
            } else {
                api.start({rotateX: 180});
                isFlipped.current = true;
            }
        },
        []
    );

    return (
        <div className={styles.container}
             onClick={handleClick}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            {trail.map(({rotateX}, i) => (
                <div key={i} className={styles.box}>
                    <animated.div
                        key={LETTERS[i]}
                        className={styles.box_front}
                        style={{
                            transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                            transformStyle: 'preserve-3d',
                        }}>
                        {'?'}
                    </animated.div>
                    <animated.div
                        className={styles.box_back}
                        style={{
                            transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                            transformStyle: 'preserve-3d',
                        }}>
                        {LETTERS[i]}
                    </animated.div>
                </div>
            ))}
        </div>
    );
};