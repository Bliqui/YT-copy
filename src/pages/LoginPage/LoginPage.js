import React from 'react';
import {NavLink} from "react-router-dom";
import {LogIn} from "../../components/LogIn/LogIn";
import './LoginPage.scss';

export const LoginPage = () => {
    return (
        <div className={'loginBody'}>
            <span className={'loginTitle'}>Login</span>
            <LogIn/>
            <p className={'loginReDir'}><NavLink to={'/register'}>Don't have an account yet?</NavLink></p>
        </div>
    );
};