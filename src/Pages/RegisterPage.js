import React from 'react';
import {NavLink} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <div>
            <span>Register</span>

            <p>Already have an account? <NavLink to={'/login'}>log in</NavLink></p>
        </div>
    );
};