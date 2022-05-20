import React from 'react';
import './Video.scss'

export const Video = ({videoData}) => {
    return (
        <div className={'videoBody'}>
            <div className={'videoWrapper'}>
                <div className={'video'}>
                    <img src={videoData.snippet.thumbnails.medium.url} alt=""/>
                    <div className={'videoInfo'}>
                        <div className={'videoTitle'}>{videoData.snippet.title}</div>
                        <div className={'videoChannelName'}>{videoData.snippet.channelTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};