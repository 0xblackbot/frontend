import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Info} from "./components/info/Info";
import {MainScene} from "./components/main-scene/MainScene";
import {Cursor} from "./components/cursor/Cursor";
import {CursorVariantProvider} from "./hooks/cursor-variant/cursor-variant.provider";
import {isDesktop, isMobile, isTablet} from 'react-device-detect';
import {isBrowser} from "framer-motion";

function App() {
    return (
        <CursorVariantProvider>
            <div className={styles.container}>
                <MainScene/>
                <Info/>
                <Footer/>
                {isDesktop && <Cursor/>}
            </div>
        </CursorVariantProvider>
    );
}

export default App;
