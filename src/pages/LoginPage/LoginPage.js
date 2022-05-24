import React from 'react';
import {NavLink} from "react-router-dom";
import {LogIn} from "../components/LogIn/LogIn";

export const LoginPage = () => {
    return (
        <div>
            <span>Login</span>
            <LogIn/>
            <p> or <NavLink to={'/register'}>register</NavLink></p>
        </div>
    );
};