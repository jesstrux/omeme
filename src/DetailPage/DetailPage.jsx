import React, { Component } from 'react';
import './DetailPage.css';
import Img from 'react-image'

// components
import Header from "../Header/Header";

let imageHeight;

class DetailPage extends Component{
    state = {
        shareImage: null,
        imageLoaded: false
    };

    componentWillMount() {
        const image = this.props.image;
        imageHeight = window.innerWidth / image.width * image.height;

        var img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            this.setState({imageLoaded : true, shareImage: img});
        }
        img.src = image.src;
    }

    shareImage = () => {
        const image = this.state.shareImage;
        
        const imageBox = document.querySelector("#detailImage img").getBoundingClientRect()
        const canvas = document.createElement('canvas');
        canvas.width = imageBox.width;
        canvas.height = imageBox.height;
        canvas.getContext('2d').drawImage(image, 0, 0);
        canvas.toBlob(blob => {
            navigator.share({blob: blob, mimeType: 'image/png'})
        });
    }

    render(){
        return ( 
            <div id="detailPage">
                <Header notabs hasback dark onBackPressed={this.props.onGoBack} />
            
                <div id="detailContent">
                    <div id="detailImage" style={ { height: imageHeight, backgroundImage: "url(" + this.props.image.thumb + ")" } }>
                        <Img src={this.props.image.src} alt="" />
                    </div>
                </div>

                { this.state.imageLoaded && <button id="shareButton" onClick={ this.shareImage }>
                        SHARE
                    </button>
                }
            </div>
        );
    }
}
 
export default DetailPage;