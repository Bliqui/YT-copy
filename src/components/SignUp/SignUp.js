import React from 'react';
import {LogForm} from "../LogForm/LogForm";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebase";
import {useNavigate} from "react-router-dom";

export const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const handleRegister = (email, password) => {
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
            })
            .catch(console.error)
    }
    return (
        <LogForm
            className={'form'}
            title={'Sign up'}
            handleClick={handleRegister}
        />
    );
};