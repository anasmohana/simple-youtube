import axios from 'axios';
//use axios to send our request to youtube API.
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
})