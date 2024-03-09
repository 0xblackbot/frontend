import React from "react";

import styles from './Info.module.css';
import {getClassName} from "../../utils/style.utils";

export const Info = () => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.info_text}>
                    We are R&D company that creates efficient MEV systems for blockchains and crypto markets
                </p>
            </div>
            <div className={getClassName(styles.container, styles.container_black)}>
                <p className={getClassName(styles.info_text, styles.info_text_white)}>
                    Contact us for inquiries or collaboration opportunities
                </p>
            </div>
        </>
    );
};