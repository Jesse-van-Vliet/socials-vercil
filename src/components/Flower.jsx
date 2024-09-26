
import React from 'react';;
import FlowerDrawing from "./card-components/Header copy";
import Handwriting from "./card-components/Handwriting";
const Flower = () => {
    return (

        <div className="zoomIn w-5/12 flex flex-col text-white color p-4 m-5 card-r">
            <Handwriting/>
            <FlowerDrawing/>
        </div>
    );
}
export default Flower;