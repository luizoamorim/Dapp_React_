import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from "./components/Login";


const Routes = () => {
    return (
        <BrowserRouter>        
            <Route component={Login} path="/" exact/>
            <Route component={Dashboard} path="/dashboard" exact/>
        </BrowserRouter>
    )
}

export default Routes;