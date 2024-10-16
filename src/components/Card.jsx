import AudioPlayer from "./card-components/AudioPlayer";
import Header from "./card-components/Header";
import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
const Card = () => {
    return (

        <div className="zoomIn w-5/12 flex flex-col text-white color p-4 m-5 card-r">

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} tiltReverse={true}>
                <Header />
                <AudioPlayer />
            </Tilt>





        </div>
    );
}

export default Card;