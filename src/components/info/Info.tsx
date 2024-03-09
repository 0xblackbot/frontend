import React from "react";

import styles from './Info.module.css';
import {getClassName} from "../../utils/style.utils";
import {useCursorVariant} from "../../hooks/cursor-variant/cursor-variant.hook";

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
                <div/>
            </div>
        </>
    );
};