import React from "react";
import {Link} from "react-router-dom";

import styles from './footer.module.css';
import {useCursorVariant} from "../../hooks/cursor-variant/cursor-variant.hook";
import {getClassName} from "../../utils/style.utils";

export const Footer = () => {
    const {onMouseEnter, onMouseLeave} = useCursorVariant();

    return (
        <div className={styles.container}>
            <div className={styles.container_with_border}>
                <div className={styles.buttons_container}>
                    <Link to="/privacy-policy"
                          className={getClassName(styles.legal_text, styles.action_button)}
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}>
                        Privacy Policy
                    </Link>
                    <Link to="/terms-and-conditions"
                          className={getClassName(styles.legal_text, styles.action_button)}
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}>
                        Terms & Conditions
                    </Link>
                </div>
                <div className={styles.legal_container}>
                    <Link to="/" className={styles.legal_text}>
                        Copyright © 2024 blackbot.
                    </Link>
                    <Link to="/" className={styles.legal_text}>
                        All rights reserved.
                    </Link>
                </div>
            </div>
        </div>
    );
};