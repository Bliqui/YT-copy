import React from 'react'
import './Modal.scss'
import {VideoPlayer} from "../VideoPlayer/VideoPlayer";

export const Modal = ({modalStatus, videoId ,setModalStatus}) => {
    return (
        <div className={modalStatus ? 'modal active' : 'modal'} onClick={() => setModalStatus(false)}>
            <div className={modalStatus ? 'modalContent active' : 'modalContent'} onClick={(e) => e.stopPropagation()}>
                <VideoPlayer videoId={videoId}/>
            </div>
        </div>
    );
};