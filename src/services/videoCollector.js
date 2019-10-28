import youtube from '../services/youtubeAPI';
import _ from 'lodash';
import moment from 'moment';
const KEY = 'AIzaSyAxNVIWg_58zZ5bZ9DLa0wu6fGI89Z-hmg';


export default async function getVideos(channels, hideVideoes){
    const maxResults = 10 + hideVideoes.length;
    let videos = [];
    for(const [idx, id] of channels.entries()){
        videos[idx] = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults,
                key: KEY,
                channelId: id,
                order:'date',
                type:'video'
            }
        });
        videos[idx] = videos[idx].data.items;
    };
    videos = [].concat(...videos);
    videos = _.remove(videos, function(o) {return !hideVideoes.includes(o.id.videoId);});
    videos = _.sortBy(videos, [function(o) {return new moment(o.snippet.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}]).reverse().slice(0,10);

    return videos;

};