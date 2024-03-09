import React, {useEffect, useState} from "react";
import {motion, Variants} from "framer-motion";
import styles from "./Cursor.module.css";
import {CursorTypeEnum} from "../../enums/cursor-type.enum";
import {useCursorVariant} from "../../hooks/cursor-variant/cursor-variant.hook";

const SMALL_SIZE = 32;
const BIG_SIZE = 96;

export const Cursor = () => {
    const {cursorVariant} = useCursorVariant();

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = (mouseEvent: MouseEvent) => {
            setMousePosition({
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants: Variants = {
        [CursorTypeEnum.default]: {
            width: SMALL_SIZE,
            height: SMALL_SIZE,
            x: mousePosition.x -
                (
                    SMALL_SIZE / 2
                ),
            y: mousePosition.y -
                (
                    SMALL_SIZE / 2
                ),
        },
        [CursorTypeEnum.action]: {
            width: BIG_SIZE,
            height: BIG_SIZE,
            x: mousePosition.x -
                (
                    BIG_SIZE / 2
                ),
            y: mousePosition.y -
                (
                    BIG_SIZE / 2
                ),
            backgroundColor: "#c94245",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className={styles.cursor}
            variants={variants}
            animate={cursorVariant}
        />
    );
};