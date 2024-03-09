import React from "react";

import styles from './Footer.module.css';
import {getClassName} from "../../utils/style.utils";

// <p>Email: info.blackbot@gmail.com</p>
// <p>Telegram: +380 68 809 2880</p>
// <p>X: @0xblackbot</p>

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_with_border}>
                <p className={styles.contacts_button}>Email</p>
                <p className={styles.contacts_button}>Telegram</p>
                <p className={styles.contacts_button}>X</p>
            </div>

            <div className={styles.legal_container}>
                <p className={styles.legal_button}>Privacy Policy</p>
                <p className={styles.legal_button}>Terms & Conditions</p>
            </div>
        </div>
    );
};