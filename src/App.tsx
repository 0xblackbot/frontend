import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Trail} from "./components/trail/Trail";

function App() {
    return (
        <div style={{
            width: '100%',
            flexDirection: "column"
        }}>
            <div className={styles.trail_container}>
                <Trail/>
            </div>
            <div className={styles.trail_container}>
                <p>R&D company that creates efficient MEV systems for blockchains and crypto markets</p>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
