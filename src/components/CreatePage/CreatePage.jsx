import React, { Component } from 'react';
import './CreatePage.css';

// components
import Header from "../Header/Header";

class CreatePage extends Component {
    state = {
        cantshare: true,
        cancas: null,
        cur_image: null,
        topText: "",
        topColor: "#000000",
        bottomColor: "#000000"
    };

    processImage(files){
        this.setState({cur_image : null, cantshare: true});
        this.clearCanvas();

        if(!files || !files.length)
            return;

        var file = files[0];
        console.log(file);

        if (file.type.indexOf("image") === -1){
            alert("Please pick image file.");
            return;
        }

        if(file.size / 1000000 >= 0.9){
            alert("Please pick a smaller image.");
            return;
        }

        var reader = new FileReader();

        reader.onload = (e) => {
            this.setState({cur_image : e.target.result});
            
            const image = document.querySelector("#createImageDummy");
            image.onload = () => {
                console.log("Loaded!!");
                this.setImage()
            }
        }

        reader.readAsDataURL(file);
    }

    clearCanvas(){
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setImage(){
            // console.log(this.state.cur_image);
        const image = document.querySelector("#createImageDummy");
        const imageBox = image.getBoundingClientRect();
        
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        canvas.style.width = imageBox.width;
        canvas.style.height = imageBox.height;

        canvas.width = imageBox.width;
        canvas.height = imageBox.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        if(this.state.topText && this.state.topText.length)
            this.fillText(ctx, this.state.topText, 20, 40, this.state.topColor, canvas.width - 40, 28);

        // canvas.toBlob(blob => {
        //     console.log(blob);
        // });

        if (navigator.share !== undefined) {
            this.setState({cantshare: false, canvas: canvas});
        }
    }

    fillText(context, text, x, y, color, maxWidth, lineHeight) {
        context.fillStyle = color;
        context.font = '24px serif';
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }

        context.fillText(line, x, y);
      }

    inputChanged = (e) => {
        var input = e.target;

        this.setState( { [input.id] : input.value});

        console.log(this.state.topText);

        if(this.state.cur_image !== null)
            this.setImage();
    }

    getEditedImage(){
        console.log(this.getImage());

        return this.getImage();
    }

    shareImage = () => {
        this.state.canvas.toBlob(blob => {
            navigator.share({blob: blob, mimeType: 'image/png'})
        });
    }

    render(){
        return ( 
            <div id="createPage">
                <Header hasback dark onBackPressed={this.props.onGoBack}
                    slotActions={
                        ( 
                            <React.Fragment>
                                <label className="btn" htmlFor="pickImage">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"/></svg>
                                </label>
                                { !this.state.cantshare && <button onClick={ this.shareImage }>
                                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                                    </button>
                                }
                            </React.Fragment>
                        )
                    }
                />
            
                <div id="createContent">
                    <div id="createImage">
                        <input type="file" id="pickImage" onChange={ (e) => this.processImage(e.target.files) }/>

                        { this.state.cur_image === null && <label id="pickImageLabel" htmlFor="pickImage"> PICK IMAGE </label> }
                        
                        <img id="createImageDummy" src={ this.state.cur_image } alt="" />
                        
                        <canvas></canvas>
                    </div>
                </div>

                <div id="form">
                    <div className="form-group">
                        <label>TEXT:</label>
                        <input id="topText" type="text" onChange={ (e) => this.inputChanged(e) } placeholder="Meme top text"/>
                    </div>
                    <div className="form-group">
                        <label>COLOR:</label>
                        <input type="color" id="topColor" onChange={ (e) => this.inputChanged(e) } value={this.state.topColor}/>
                    </div>
                    {/* <div className="form-group">
                        <label>BOTTOM:</label>
                        <input id="bottomText" type="text" onChange={ (e) => this.inputChanged(e) } placeholder="Meme bottom text" value={this.state.bottomText} />
                        <input type="color" id="bottomColor" onChange={ (e) => this.inputChanged(e) } value={this.state.bottomColor}/>
                    </div> */}
                </div>
            </div>
        );
    }
}
 
export default CreatePage;