import React, {useEffect} from 'react';
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

export const FavoritesPage = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth === false) {
            navigate('/login')
        }
    }, [isAuth])

    return (
        <div className={'favoritesBody'}>
            Favorites page
        </div>
    );
};