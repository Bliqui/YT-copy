import React, {useEffect, useState} from 'react';
import {ytReq} from "../../APIs/ytRequest";
import search from "../../assests/images/search.png";
import './Videos.scss';
import {Loader} from "../Loader/Loader";
import {useNavigate} from "react-router-dom";
import {VideosList} from "../VideosList/VideosList";

export const Videos = () => {
    const [listedVideos, setListedVideos] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
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
            .finally(() => setLoader(false));
    };

    function handeInputChange(e) {
        setSearchValue(e.target.value)
    };

    return (
        <div className={'videos-search-body'}>
            <div className={'videos-wrapper'}>
                <form className={'input-wrapper'} onSubmit={(e) => handleSubmit(e)}>
                    <input className={'search-input'} value={searchValue} onChange={(e) => handeInputChange(e)}
                           placeholder={'Search'}/>
                    <button className={'input-search-btn'}>Search</button>
                </form>
                {loader ? <Loader/> : <VideosList listedVideos={listedVideos}/>}
            </div>
        </div>
    );
};