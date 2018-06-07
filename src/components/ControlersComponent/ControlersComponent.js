/**
 * Created by Wojtek on 2018-06-07.
 */
import React from 'react';

import PlayInactive from '../../assets/media/Play_inactive.png';
import PlayActive from '../../assets/media/Play_active.png';
import Graph from '../../assets/media/daftplayer.png';

const Controlers = (props) => {
    const source = props.iconPlayState ? PlayActive : PlayInactive;
    return (
        <div>

            <div className="screen__controlers ">
                <button className="shuffle-btn btn"></button>
                <div className="play-btn btn buttons__group--center">
                    <img src={source} onClick={props.togglePlay}/>
                </div>
                <button className="shuffle2-btn btn"></button>
            </div>
            <div className="graph"><img src={Graph}/></div>
        </div>
    )
};

export default Controlers;