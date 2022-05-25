import './NavBar.scss';
import logo from '../../assests/images/yt-logo.png';
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const NavBar = () => {

    const {isAuth} = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch({type: 'REMOVE_USER'});
        navigate('/login');
    }

    const goToHomePage = () => {
        navigate('/');
    }

    return (
        <nav className={'navBar-body'}>
            <div className={'navBar-wrapper'}>
                <div className={'navBar-row'}>
                    <div className={'navBar-logoWrapper'}>
                        <img onClick={goToHomePage} className={'navBar-logo'} src={logo} alt="logo"/>
                    </div>
                    <div className={'login-out-wrapper'}>
                        {isAuth ? <button onClick={logOut} className={'login-out-button'}>Logout</button> : null}
                    </div>
                </div>
            </div>
        </nav>
    );
};