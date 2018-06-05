/**
 * Created by Wojtek on 2018-06-05.
 */
import React from 'react';
import PlaylistIco from '../../assets/media/playlist_ico.svg';


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
                    <img src={PlaylistIco}/>
                </footer>
            </div>
        )
    }

}