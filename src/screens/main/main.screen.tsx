import React from "react";

import {Info} from "./components/info/info";
import {MainScene} from "./components/main-scene/main-scene";

export const MainScreen = () => {
    return (
        <>
            <MainScene/>
            <Info/>
        </>
    );
};
