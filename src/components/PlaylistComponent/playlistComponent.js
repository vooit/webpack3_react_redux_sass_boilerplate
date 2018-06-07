import React from 'react';
import HideIco from '../../assets/media/hide_ico.svg';

const Playlist = (props) => {
    const classVissible = props.showPlaylist ? "playlist vissible" : "playlist hidden";

    return (
        <div className={classVissible}>
            <div className="current">
                sadsadada
            </div>
            <div className="list">
                <ol>
                    <li>track nr 1</li>
                    <li>track nr 2</li>
                    <li>track nr 3</li>
                    <li>track nr 4</li>
                    <li>track nr 5</li>
                    <li>track nr 6</li>
                    <li>track nr 7</li>
                    <li>track nr 8</li>
                    <li>track nr 9</li>
                    <li>track nr 0</li>
                    <li>track nr 1</li>
                    <li>track nr 1</li>
                </ol>
                <button className="hide-list" onClick={props.handleHideButton}>
                    <img src={HideIco}/>
                </button>
                <button className="shuffle-btn">
                   shuffle
                </button>
            </div>
        </div>
    )
};

export default Playlist;