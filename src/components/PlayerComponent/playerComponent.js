/**
 * Created by Wojtek on 2018-06-05.
 */
import React from 'react';
import PlaylistIco from '../../assets/media/playlist_ico.svg';
import MoreIco from '../../assets/media/more_ico.svg';
import BackIco from '../../assets/media/back_ico.svg';
import Controlers from '../ControlersComponent/ControlersComponent';
import Slider from '../SliderComponent/SliderComponent';
import Playlist from '../PlaylistComponent/playlistComponent';

export default class PlayerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            isPlaylistOn: false
        };
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isToggleOn: !prevState.isToggleOn
            }
        })
    }

    openPlaylist() {
        this.setState({isPlaylistOn: true})
    }

    hidePlaylist() {
        this.setState({isPlaylistOn: false});
    }

    render() {
        return (
            <div className="player">
                <div className="top-nav">
                    <div><img src={MoreIco} className="more-ico"/></div>
                    <p><span>album</span><br/><span>unreleased</span></p>
                    <div><img src={BackIco} className="back-ico"/></div>
                </div>
                <div className="screen">
                    <Slider/>
                </div>
                <Controlers
                    togglePlay={this.handleClick.bind(this)}
                    iconPlayState={this.state.isToggleOn}/>
                <footer>
                    <div className="open-playlist-icon"
                         onClick={this.openPlaylist.bind(this)}>
                        <img src={PlaylistIco}/>
                    </div>
                    <div className="details-box">
                        <p><span>next<br/>title</span></p>
                        <p>time</p>
                    </div>
                </footer>


                <Playlist showPlaylist={this.state.isPlaylistOn} handleHideButton = {this.hidePlaylist.bind(this)}/>
            </div>
        )
    }

}