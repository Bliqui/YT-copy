import React from 'react';
import {NavLink} from "react-router-dom";
import {SignUp} from "../../components/SignUp/SignUp";
import './RegisterPage.scss'

export const RegisterPage = () => {
    return (
        <div className={'regBody'}>
            <span className={'regTitle'}>Register</span>
            <SignUp/>
            <p className={'loginReDir'}>Already have an account? <NavLink to={'/login'}>log in</NavLink></p>
        </div>
    );
};