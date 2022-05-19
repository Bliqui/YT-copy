import React, {useState} from 'react';
import {ytReq} from "../../APIs/ytRequest";
import search from "../../assests/images/search.png";
import './Videos.scss';

export const Videos = () => {
    const [listedVideos, setListedVideos] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        ytReq.get('/search', {
            params: {
                q: searchValue
            }
        })
            .then((response) => {
                setListedVideos([]);
                setListedVideos(prevState => [...prevState, response])
                console.log(response)
                console.log(listedVideos)
            })
    };
    function handeInputChange(e) {
        setSearchValue(e.target.value)
    };

    return (
        <div className={'videos-body'}>
            <div className={'videos-wrapper'}>
                <form className={'input-wrapper'} onSubmit={(e) => handleSubmit(e)}>
                    <input className={'search-input'} value={searchValue} onChange={(e) => handeInputChange(e)}
                           placeholder={'Search'}/>
                    <button className={'input-search-btn'}>Search</button>
                </form>
            </div>

        </div>
    );
};