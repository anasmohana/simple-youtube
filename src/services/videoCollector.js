import youtube from './youtubeAPI';
import sortVideos from './videoCollectorHelper';
const KEY = 'AIzaSyAxNVIWg_58zZ5bZ9DLa0wu6fGI89Z-hmg';
//send request  to Youtube API to get videos
export default async function getVideos(channels, hideVideoes){
    const maxResults = 10 + hideVideoes.length;
    let videos = [];
    //loop throught every item "selected show" and get videos
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
    // send videos collection and hiden video to helper function to get filtered, sorted videos list
    return sortVideos(videos,hideVideoes);
};