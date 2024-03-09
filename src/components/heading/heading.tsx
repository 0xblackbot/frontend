import {FC, PropsWithChildren} from "react";

import styles from './heading.module.css';

export const Heading: FC<PropsWithChildren> = ({children}) =>
    <p className={styles.heading}>{children}</p>;
