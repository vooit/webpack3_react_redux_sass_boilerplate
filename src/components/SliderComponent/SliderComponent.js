/**
 * Created by Wojtek on 2018-06-07.
 */
import React from 'react';
import Coverflow from 'react-coverflow';
import UnreleasedCover from '../../assets/media/unreleased_cover.png';
import AlbumOne from '../../assets/media/cover.png';
import AlbumThree from '../../assets/media/cover-1.png';

export default class Slider extends React.Component {
    render() {
        return (
            <div className="screen__slider">
                <Coverflow
                    height={352}
                    displayQuantityOfSide={2}
                    navigation={true}
                    infiniteScroll>
                    <div>
                        <img src={AlbumOne } alt='Album One'/>
                        <h4 className="artist">Kanye West</h4>
                    </div>
                    <div>
                        <img src={UnreleasedCover } alt='Album Two'/>
                        <h4 className="artist">Kanye West</h4>
                    </div>
                    <div>
                        <img src={AlbumThree} alt='Album three'/>
                        <h4 className="artist">Kanye West</h4>
                    </div>
                </Coverflow>
            </div>
        )
    }
}