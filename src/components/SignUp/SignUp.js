import React from 'react';
import {LogForm} from "../LogForm/LogForm";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {error, ok} from "../../helpers/customAlert";

export const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const handleRegister = (e, email, password) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
            .catch(() => error('Error. Please check that your email address is correct or the password is at least 6 characters long.'))
    }
    return (
        <LogForm
            className={'form'}
            title={'Sign up'}
            handleSubmit={handleRegister}
        />
    );
};