import React, {useState} from 'react';
import {ytReq} from "../../APIs/ytRequest";
import search from "../../assests/images/search.png";
import './Videos.scss';

export const Videos = () => {
    const [listedVideos, setListedVideos] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    function handleSubmit(){};

    return (
        <div className={'videos-body'}>
            <div className={'videos-wrapper'}>
                <form className={'input-wrapper'} onSubmit={handleSubmit}>
                    <input className={'search-input'} placeholder={'Search'}/>
                    <button className={'input-search-btn'}>Search</button>
                </form>
            </div>

        </div>
    );
};