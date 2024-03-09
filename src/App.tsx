import React from 'react';
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {MainScreen} from "./screens/main/main.screen";
import {PrivacyPolicyScreen} from "./screens/privacy-policy/privacy-policy.screen";
import {TermsAndConditionScreen} from "./screens/terms-and-conditions/terms-and-condition.screen";
import {Layout} from "./components/layout/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <MainScreen/>},
            {path: "privacy-policy", element: <PrivacyPolicyScreen/>},
            {path: "terms-and-conditions", element: <TermsAndConditionScreen/>},
            {path: "*", element: <MainScreen/>},
        ]
    }
]);

export const App = () => (<RouterProvider router={router}/>);
