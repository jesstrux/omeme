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

        if (navigator.share !== undefined) {
            var img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                this.setState({imageLoaded : true, shareImage: img});
            }
            img.src = image.src;
        }else{
            console.log("You can't share")
        }
    }

    shareImage = () => {
        // const image = this.state.shareImage;
        
        // const imageBox = document.querySelector("#detailImage img").getBoundingClientRect()
        // const canvas = document.createElement('canvas');
        // canvas.width = imageBox.width;
        // canvas.height = imageBox.height;
        // canvas.getContext('2d').drawImage(image, 0, 0);
        // canvas.toBlob(blob => {
        //     console.log(navigator);
        //     navigator.share({blob: blob, mimeType: 'image/png'})
        // });

        navigator.share({
            title: document.title,
            text: 'Hello World',
            url: 'https://developer.mozilla.org',
        });
    }

    render(){
        return ( 
            <div id="detailPage">
                <Header notabs hasback dark onBackPressed={this.props.onGoBack}
                    slotActions={
                        this.state.imageLoaded && 
                        <button onClick={ this.shareImage }>
                            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                        </button>
                    } />
            
                <div id="detailContent">
                    <div id="detailImage" style={ { height: imageHeight, backgroundImage: "url(" + this.props.image.thumb + ")" } }>
                        <Img src={this.props.image.src} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DetailPage;