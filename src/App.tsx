import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Info} from "./components/info/Info";
import {MainScene} from "./components/main-scene/MainScene";
import {Cursor} from "./components/cursor/Cursor";
import {CursorVariantProvider} from "./hooks/cursor-variant/cursor-variant.provider";
import {isDesktop} from 'react-device-detect';

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
