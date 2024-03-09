import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Info} from "./components/info/Info";
import {MainScene} from "./components/main-scene/MainScene";

function App() {
    return (
        <div className={styles.container}>
            <MainScene/>
            <Info/>
            <Footer/>
        </div>
    );
}

export default App;
