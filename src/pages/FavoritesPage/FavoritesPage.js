import React, {useEffect} from "react";
import "./FavoritesPage.scss"
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const FavoritesPage = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    const favs = useSelector((state) => state.favoritesReducer)

    useEffect(() => {
        if (isAuth === false) {
            navigate('/login')
        }
    }, [isAuth])

    if (favs.length === 0) {
        return (
            <div className={'favoritesBody'}>
                <div className={'favoritesEmptyWrapper'}>
                    <div className={'favoritesEmptyContent'}>
                        <p className={'emptyTitle'}>Your favorite videos list is empty.</p>
                        <NavLink className={'emptyAdvice'} to={'/'}>It's time to find your favorite video...</NavLink>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={'favoritesBody'}>
            <div className={'favoritesWrapper'}>
                Favorites page
            </div>
        </div>
    );
};