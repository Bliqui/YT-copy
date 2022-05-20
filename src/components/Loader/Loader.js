import './Loader.scss';
import loader from '../../assests/images/loader.gif'

export const Loader = () => {
    return (
        <img className={'loader'} src={loader} alt="loader" />
    );
};