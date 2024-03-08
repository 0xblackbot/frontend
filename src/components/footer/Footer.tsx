import React from "react";

import styles from './Footer.module.css';

// <p>Email: info.blackbot@gmail.com</p>
//             <p>Telegram: +380 68 809 2880</p>
//             <p>X: @0xblackbot</p>

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_with_border}>
                <p style={{
                    margin: 0,
                    color: '#F4ED36',
                    fontFamily: 'PassionOneBold',
                    fontSize: '48px',
                    lineHeight: 0.8
                }}>Contact us for inquiries or collaboration opportunities</p>
            </div>

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