import React from 'react';
import {NavLink} from "react-router-dom";

export const LoginPage = () => {
    return (
        <div>
            <span>Login</span>

            <p> or <NavLink to={'/register'}>register</NavLink></p>
        </div>
    );
};