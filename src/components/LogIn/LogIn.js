import React from 'react';
import {LogForm} from "../LogForm/LogForm";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {error, ok} from "../../helpers/customAlert";

export const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = getAuth(app);
    const handleLogin = (e, email, password) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }
                });
                navigate('/');
                ok('Welcome!')
            })
            .catch(() => error('Wrong email or password.'))
    }

    return (
        <LogForm
            className={'form'}
            title={'Sign in'}
            handleSubmit={handleLogin}
        />
    );
};