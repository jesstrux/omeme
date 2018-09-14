import React from "react";

import Masonry from 'react-masonry-css'
import MemeGif from "./MemeGif";
import './MemeGifList.css';

const MemeGifList = ( { images } ) => {
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2
    };

    return ( 
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            { images.map( (img, index) => (
              <MemeGif image={img} key={index} />
            ))}
        </Masonry>
     );
}
 
export default MemeGifList;