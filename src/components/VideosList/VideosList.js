import React from 'react';
import {Video} from "../Video/Video";
import './VideosList.scss';

export const VideosList = ({listedVideos}) => {
    console.log(listedVideos)

    if (listedVideos) {
        return (
        <div className={'videosBody'}>
            <div className={'videosWrapper'}>
                {listedVideos.items.map((video) => <Video key={video.etag} videoData={video}/>)}
            </div>
        </div>
    );}
};