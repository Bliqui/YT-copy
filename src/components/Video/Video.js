import React, {useState} from 'react';
import './Video.scss';
import {Modal} from "../Modal/Modal";

export const Video = ({videoData}) => {
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <div className={'videoBody'}>
            <div className={'videoWrapper'}>
                <div className={'video'} onClick={() => setModalStatus(true)}>
                    <img src={videoData.snippet.thumbnails.medium.url} alt=""/>
                    <div className={'videoInfo'}>
                        <div className={'videoTitle'}>{videoData.snippet.title}</div>
                        <div className={'videoChannelName'}>{videoData.snippet.channelTitle}</div>
                    </div>
                </div>
                {modalStatus ? <Modal modalStatus={modalStatus} videoId={videoData.id.videoId} setModalStatus={setModalStatus}/> : null}
            </div>
        </div>
    );
};