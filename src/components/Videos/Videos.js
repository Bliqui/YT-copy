import React, {useEffect, useState} from 'react';
import {ytReq} from "../../APIs/ytRequest";
import './Videos.scss';
import search from '../../assests/images/search.png'
import {Loader} from "../Loader/Loader";
import {useNavigate} from "react-router-dom";
import {VideosList} from "../VideosList/VideosList";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {alert} from "../../helpers/customAlert";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";

export const Videos = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const videos = useSelector(state => state.videosListReducer)

    function fetchVideos(e) {
        e.preventDefault()
        setLoader(true)

        ytReq.get('/search', {
            params: {
                q: searchValue
            }
        })
            .then((response) => {
                dispatch({
                    type: 'SET_VIDEOS',
                    payload: {
                        etag: response.data.etag,
                        items: response.data.items,
                        kind: response.data.kind,
                        nextPageToken: response.data.nextPageToken,
                        pageInfo: response.data.pageInfo,
                        regionCode: response.data.regionCode,
                    }
                })
            })
            .catch(() => {
                alert();
                navigate('/');
            })
            .finally(() => setLoader(false));
    };

    function fetchNextVideos(e) {
        setLoader(true)
        e.preventDefault()

        ytReq.get('/search', {
            params: {
                q: searchValue,
                pageToken: videos.nextPageToken
            }
        })
            .then((response) => {
                dispatch({
                    type: 'SET_VIDEOS',
                    payload: {
                        etag: response.data.etag,
                        items: response.data.items,
                        kind: response.data.kind,
                        nextPageToken: response.data.nextPageToken,
                        pageInfo: response.data.pageInfo,
                        regionCode: response.data.regionCode,
                    }
                })
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
    }, [isAuth]);

    return (
        <div className={'videos-search-body'}>
            <div className={'videos-wrapper'}>
                <form className={'input-wrapper'} onSubmit={(e) => fetchVideos(e)}>
                    <input className={'search-input'} value={searchValue} onChange={(e) => handeInputChange(e)}
                           placeholder={'Search'}/>
                    <button className={'input-search-btn'}><img src={search} alt="search"/></button>
                </form>
            </div>
            {loader ? <Loader/> : <VideosList className={'videosList'} listedVideos={videos}/>}
            {videos.items.length <= 0 ? null : <button className={'new-videos-btn'} onClick={(e) => fetchNextVideos(e)}>Load more</button>}
            <ScrollToTop/>
        </div>
    )
};