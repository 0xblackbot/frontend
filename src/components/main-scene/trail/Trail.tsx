import React, {FC, useCallback, useRef} from "react";
import styles from './Trail.module.css';
import {useTrail, animated} from "@react-spring/web";
import {ChangeCursorVariantProps} from "../../../hooks/use-cursor-variant.hook";

const LETTERS = ['B', 'L', 'A', 'C', 'K', 'B', 'O', 'T'];

export const Trail: FC<ChangeCursorVariantProps> = ({onMouseEnter, onMouseLeave}) => {
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
        <div className={styles.container} onClick={handleClick}>
            {trail.map(({rotateX}, i) => (
                <div key={i}
                     className={styles.box}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
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