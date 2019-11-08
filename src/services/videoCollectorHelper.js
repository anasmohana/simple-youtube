import _ from 'lodash';
import moment from 'moment';

export default function sortVideos(videos, hideVideoes){
    //convert 2D array to 1D.
    videos = [].concat(...videos);
    //remove all hiden videos.
    videos = _.remove(videos, function(o) {return !hideVideoes.includes(o.id.videoId);});
    //sort collection by date and select top 10.
    videos = _.sortBy(videos, [function(o) {return new moment(o.snippet.publishedAt).utc().format('MMMM Do YYYY, HH:mm:ss a')}]).reverse().slice(0,10);
    return videos;
}