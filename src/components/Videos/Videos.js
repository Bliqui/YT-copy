import React, {useEffect, useState} from 'react';
import {ytReq} from "../../APIs/ytRequest";
import './Videos.scss';
import search from '../../assests/images/search.png'
import {Loader} from "../Loader/Loader";
import {useNavigate} from "react-router-dom";
import {VideosList} from "../VideosList/VideosList";
import {useAuth} from "../../hooks/useAuth";

export const Videos = () => {
    const [listedVideos, setListedVideos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()

        setLoader(true)

        ytReq.get('/search', {
            params: {
                q: searchValue
            }
        })
            .then((response) => {
                setListedVideos([]);
                setListedVideos(prevState => [...prevState, response.data])
            })
            .catch(() => {
                alert('Oops... something could have gone wrong.');
                navigate('/');
            })
            .finally(() => {
                setLoader(false)
            });
    };

    function handeInputChange(e) {
        setSearchValue(e.target.value)
    };

    const {isAuth} = useAuth();

    useEffect(() => {
        if (isAuth === false) {
            navigate('/login')
        }
    }, [isAuth])

    return (
        <div className={'videos-search-body'}>
            <div className={'videos-wrapper'}>
                <form className={'input-wrapper'} onSubmit={(e) => handleSubmit(e)}>
                    <input className={'search-input'} value={searchValue} onChange={(e) => handeInputChange(e)}
                           placeholder={'Search'}/>
                    <button className={'input-search-btn'}><img src={search} alt="search"/></button>
                </form>
            </div>
            {loader ? <Loader/> : <VideosList className={'videosList'} listedVideos={listedVideos}/>}
        </div>
    )
};