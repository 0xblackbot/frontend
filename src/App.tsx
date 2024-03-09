import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Info} from "./components/info/Info";
import {MainScene} from "./components/main-scene/MainScene";
import {Cursor} from "./components/cursor/Cursor";
import {CursorVariantProvider} from "./hooks/cursor-variant/cursor-variant.provider";

function App() {
    return (
        <CursorVariantProvider>
            <div className={styles.container}>
                <MainScene/>
                <Info/>
                <Footer/>
                <Cursor/>
            </div>
        </CursorVariantProvider>
    );
}

export default App;
