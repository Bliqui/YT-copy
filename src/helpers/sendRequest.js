import axios from "axios";

const KEY = 'AIzaSyAZQ3nc2EUVuTWE_42yq1IsrLSgbTGbeM4';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: '12',
        key: KEY,
        type: 'video'
    }
});

export function SendRequest() {
    return (
        axios.get('https://www.googleapis.com/youtube/v3/videos')
            .then(
                (response) => {
                    console.log(response)
                }
            )
    )
}