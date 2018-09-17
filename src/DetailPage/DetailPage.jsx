import React from 'react';
import './DetailPage.css';
import Img from 'react-image'
import lifecycle from 'react-pure-lifecycle';

// components
import Header from "../Header/Header";

let imageHeight;

const methods = {
    componentWillMount( { image } ) {
        imageHeight = window.innerWidth / image.width * image.height;
    }
};

const DetailPage = ( props ) => {
    let { image } = props;

    image = image || {};

    function shareImage() {
        var image = document.querySelector("#detailImage img");
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0);
        canvas.toBlob(blob => navigator.share({blob: blob, mimeType: 'image/png'}),
                    'image/png');
    }

    return ( 
        <div id="detailPage">
            <Header notabs hasback dark onBackPressed={props.onGoBack} />
        
            <div id="detailContent">
                <div id="detailImage" style={ { height: imageHeight, backgroundImage: "url(" + image.thumb + ")" } }>
                    <Img src={image.src} alt="" />
                </div>
            </div>

            <button id="shareButton" onClick={ shareImage }>
                SHARE
            </button>
        </div>
    );
}
 
export default lifecycle(methods)(DetailPage);