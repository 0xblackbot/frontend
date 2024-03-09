import React from "react";
import {isDesktop} from "react-device-detect";
import {Outlet, ScrollRestoration} from "react-router-dom";

import styles from "./layout.module.css";
import {Cursor} from "../cursor/cursor";
import {Footer} from "../footer/footer";

export const Layout = () => (
    <div className={styles.container}>
        <ScrollRestoration/>
        {isDesktop && <Cursor/>}

        <Outlet/>

        <Footer/>
    </div>
);
