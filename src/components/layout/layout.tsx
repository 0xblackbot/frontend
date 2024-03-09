import React from "react";
import {isDesktop} from "react-device-detect";
import {Cursor} from "../cursor/cursor";
import {Outlet, ScrollRestoration} from "react-router-dom";
import {Footer} from "../footer/footer";
import styles from "./layout.module.css";

export const Layout = () => (
    <div className={styles.container}>
        <ScrollRestoration/>
        {isDesktop && <Cursor/>}

        <Outlet/>

        <Footer/>
    </div>
);
