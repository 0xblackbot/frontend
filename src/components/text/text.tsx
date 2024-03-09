import {FC, PropsWithChildren} from "react";

import styles from './text.module.css';

export const Text: FC<PropsWithChildren> = ({children}) =>
    <p className={styles.text}>{children}</p>;
