import React from 'react';
import {Video} from "../Video/Video";
import './VideosList.scss';

export const VideosList = ({listedVideos}) => {
    const videosList = listedVideos[0]

    if (listedVideos.length > 0) {
        return (
        <div className={'videosBody'}>
            <div className={'videosWrapper'}>
                {videosList.items.map((video) => <Video key={video.etag} videoData={video}/>)}
            </div>
        </div>
    );}
};