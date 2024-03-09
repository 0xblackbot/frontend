import React, {FC} from "react";

import styles from './Footer.module.css';
import {ChangeCursorVariantProps} from "../../hooks/use-cursor-variant.hook";

// <p>Email: info.blackbot@gmail.com</p>
// <p>Telegram: +380 68 809 2880</p>
// <p>X: @0xblackbot</p>

export const Footer: FC<ChangeCursorVariantProps> = ({onMouseEnter, onMouseLeave}) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_with_border}>
                <p className={styles.contacts_button}
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave}>
                    Email
                </p>
                <p className={styles.contacts_button}
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave}>
                    Telegram
                </p>
                <p className={styles.contacts_button}
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave}>
                    X
                </p>
            </div>

            <div className={styles.legal_container}>
                <p className={styles.legal_button}
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave}>
                    Privacy Policy
                </p>
                <p className={styles.legal_button}
                   onMouseEnter={onMouseEnter}
                   onMouseLeave={onMouseLeave}>
                    Terms & Conditions
                </p>
            </div>
        </div>
    );
};