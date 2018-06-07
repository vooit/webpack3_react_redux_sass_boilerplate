/**
 * Created by Wojtek on 2018-06-05.
 */
import React from 'react';
import PlaylistIco from '../../assets/media/playlist_ico.svg';
import img from '../../assets/media/bg_image.jpg';


export default class PlayerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            player: null
        };

    }

    render() {
        return (
            <div className="player">
                <p>playerComponent</p>
                <footer>
                    {/*<img src={img} alt=""/>*/}
                    <img src={PlaylistIco}/>
                </footer>
            </div>
        )
    }

}