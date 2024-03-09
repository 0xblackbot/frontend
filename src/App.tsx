import React from 'react';
import styles from './App.module.css';
import {Footer} from './components/footer/Footer';
import {Trail} from "./components/trail/Trail";
import {Info} from "./components/info/Info";
import {Player} from "@lottiefiles/react-lottie-player";
import {getClassName} from "./utils/style.utils";

function App() {
    return (
        <div className={styles.container}>
            <div className={getClassName(
                styles.content_container,
                styles.trail_container
            )}>
                <div/>
                <Trail/>
                <Player src={'./scroll down.json'}
                        autoplay={true}
                        loop={true}
                        style={{height: '100px', width: '100px'}}/>
            </div>
            <Info/>
            <Footer/>
        </div>
    );
}

export default App;
