import React, {FC} from "react";

import styles from './Footer.module.css';
import {ChangeCursorVariantProps} from "../../hooks/use-cursor-variant.hook";
import {getClassName} from "../../utils/style.utils";

// <p>Email: info.blackbot@gmail.com</p>
// <p>Telegram: +380 68 809 2880</p>
// <p>X: @0xblackbot</p>

export const Footer: FC<ChangeCursorVariantProps> = ({onMouseEnter, onMouseLeave}) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_with_border}>
                <div className={styles.buttons_container}>
                    <p className={getClassName(styles.legal_text, styles.action_button)}
                       onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
                        Privacy Policy
                    </p>
                    <p className={getClassName(styles.legal_text, styles.action_button)}
                       onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
                        Terms & Conditions
                    </p>
                </div>
                <div className={styles.legal_container}>
                    <p className={styles.legal_text}>
                        Copyright © 2024 blackbot.
                    </p>
                    <p className={styles.legal_text}>
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};