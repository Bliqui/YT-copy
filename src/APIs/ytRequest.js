import axios from "axios";

const KEY = 'AIzaSyAZQ3nc2EUVuTWE_42yq1IsrLSgbTGbeM4';

export const ytReq = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});

