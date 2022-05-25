import React from 'react';
import {NavLink} from "react-router-dom";
import {SignUp} from "../../components/SignUp/SignUp";
import './RegisterPage.scss'

export const RegisterPage = () => {
    return (
        <div className={'regBody'}>
            <span className={'regTitle'}>Register</span>
            <SignUp/>
            <p className={'loginReDir'}><NavLink to={'/login'}>Already have an account? Log in.</NavLink></p>
        </div>
    );
};