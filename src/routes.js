import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from './Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>        
            <Route component={Login} path="/" exact/>
            <Route component={Dashboard} path="/dashboard"/>
        </BrowserRouter>
    )
}

export default Routes;