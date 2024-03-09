import React from "react";

import styles from './Info.module.css';
import {getClassName} from "../../utils/style.utils";
import {useCursorVariant} from "../../hooks/cursor-variant/cursor-variant.hook";
import {CONTACTS_EMAIL, CONTACTS_TELEGRAM, CONTACTS_X} from "../../data";

const EMAIL_LINK = `mailto:${CONTACTS_EMAIL}`;
const TELEGRAM_LINK = `https://t.me/${CONTACTS_TELEGRAM}`;
const X_LINK = `https://x.com/${CONTACTS_X}`;

export const Info = () => {
    const {onMouseEnter, onMouseLeave} = useCursorVariant();

    return (
        <>
            <div className={styles.container}>
                <p className={styles.info_text}>
                    We are R&D company that creates efficient MEV systems for blockchains and crypto markets
                </p>
            </div>
            <div className={getClassName(styles.container, styles.container_black)}>
                <div/>
                <p className={getClassName(styles.info_text, styles.info_text_white)}>
                    Contact us for inquiries or collaboration opportunities
                </p>
                <div className={styles.contacts_container}>
                    <a className={styles.contacts_button}
                       href={EMAIL_LINK}
                       target="_blank"
                       onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
                        Email
                    </a>
                    <a className={styles.contacts_button}
                       href={TELEGRAM_LINK}
                       target="_blank"
                       onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
                        Telegram
                    </a>
                    <a className={styles.contacts_button}
                       href={X_LINK}
                       target="_blank"
                       onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
                        X
                    </a>
                </div>
                <div/>
            </div>
        </>
    );
};