import React from 'react';
import {NavLink} from "react-router-dom";
import {SignUp} from "../components/SignUp/SignUp";

export const RegisterPage = () => {
    return (
        <div>
            <span>Register</span>
            <SignUp/>
            <p>Already have an account? <NavLink to={'/login'}>log in</NavLink></p>
        </div>
    );
};