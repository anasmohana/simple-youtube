import React from 'react';
import Channel from './Channel';
import VideoList from './VideoList';
import Search from './Search';
import VideoDetail from './VideoDetail';
import getVideos from '../services/videoCollector';

class App extends React.Component {
    state = {
      channels: [
        {id:'UCVTyTA7-g9nopHeHbeuvpRA',name:'Late Night with Seth Myers',selected:false},
        {id:'UCwWhs_6x42TyRM4Wstoq8HA',name:'The Daily Show with Trevor Noah',selected:false},
        {id:'UCMtFAi84ehTSYSE9XoHefig',name:'The Late Show with Stephen Colbert',selected:false}
      ],
        videos: [],
        hideVideoes: [],
        selectedVideo: null,
    }
    handleSubmit = async () => {
        let selectedCahnnel = []
        selectedCahnnel = this.state.channels.filter(channel => channel.selected);
        selectedCahnnel = selectedCahnnel.map(channel => channel.id);
        const videos = await getVideos(selectedCahnnel,this.state.hideVideoes);
        this.setState({ videos })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        this.handleHide(video);
    }
    handelChannelSelect = (channel) => {
        const channels = [...this.state.channels];
        const index = channels.indexOf(channel);
        channels[index] = {...channel};
        channels[index].selected =! channels[index].selected;
        this.setState({channels,newSearch:true});
    }
    handleHide = (video) => {
        const videos = this.state.videos.filter(v => v.id.videoId !== video.id.videoId);
        const hideVideoes = [...this.state.hideVideoes, video.id.videoId];
        this.setState({ videos, hideVideoes });
    }

    render() {
        return (
            <div className='container mt-3'>
                <h3>Please Choose one or more Channel</h3>
                <ul className="list-group list-group-horizontal-sm mt-3 ">
                  {this.state.channels.map(channel => (
                    <Channel
                      key={channel.id}
                      onSelect={this.handelChannelSelect}
                      channel={channel}
                    />
                  ))}
                </ul>
                <Search onSubmit={this.handleSubmit}/>
                <div className="row mt-3">
                    <div className="col-sm-8">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-sm-4">
                        <VideoList onVideoSelect={this.handleVideoSelect} onVideoHide={this.handleHide} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
