import React from "react";

import Masonry from 'react-masonry-css'
import MemeGif from "./MemeGif";
import './MemeGifList.css';

import lifecycle from 'react-pure-lifecycle';

const methods = {
    componentDidMount(props) {
        const imagesWrapper = document.querySelector("#imagesWrapper");
        
        imagesWrapper.addEventListener("animationend", ( e ) => {
            imagesWrapper.classList.remove("change");
            props.onImagesAnimated()
        });
    }
};

const MemeGifList = ( props ) => {
    const { images, imagesChanging } = props;
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2
    };

    return ( 
        <div id="imagesWrapper" className={(!images.length ? 'hide' : '') + (imagesChanging ? 'change' : '')}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                { images.map( (img, index) => (
                    <MemeGif image={img} key={index} 
                        onClicked={ image => props.onViewImage( image ) } />
                ))}
            </Masonry>
        </div>
     );
}
 
export default lifecycle(methods)(MemeGifList);