import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Info} from "./components/info/Info";
import {MainScene} from "./components/main-scene/MainScene";
import {Cursor} from "./components/cursor/Cursor";
import {useCursorVariant} from "./hooks/use-cursor-variant.hook";

function App() {
    const {cursorVariant, onMouseEnter, onMouseLeave} = useCursorVariant();

    return (
        <div className={styles.container}>
            <MainScene onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            <Info/>
            <Footer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            <Cursor cursorVariant={cursorVariant}/>
        </div>
    );
}

export default App;
