import './NavBar.scss'
import logo from '../../assests/images/yt-logo.png'

export const NavBar = () => {
    return (
        <nav className={'navBar-body'}>
            <div className={'navBar-wrapper'}>
                <div className={'navBar-row'}>
                    <div className={'navBar-logoWrapper'}>
                        <img className={'navBar-logo'} src={logo} alt="logo"/>
                    </div>
                    <div className={'login-out-wrapper'}>
                        <button className={'login-out-button'}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};