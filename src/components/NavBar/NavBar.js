import './NavBar.scss'
import heart from '../../assests/images/white-heart.png'
import search from '../../assests/images/search.png'

export const NavBar = () => {
    return (
        <nav className={'navBar-body'}>
            <div className={'navBar-wrapper'}>
                <div className={'navBar-row'}>
                    <div className={'navBar-items'}>
                        <span className={'navBar-item-left'}>Videos</span>
                        <span className={'navBar-item-right'}>Favorite videos <img className={'heart-icon'} src={heart} alt="heart"/></span>
                    </div>
                    <div className={'login-out-wrapper'}>
                        <button className={'login-out-button'}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};