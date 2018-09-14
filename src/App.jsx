import React, { Component } from 'react';
import { IMAGES } from "./images";

import { filter } from "lodash";
import './App.css';
import MiniRouter from "./MiniRouter";

// components
import Header from "./Header/Header";
import MemeGifList from "./MemeGifList/MemeGifList";

class App extends Component {
  state = {
    tab: 0,
    loading: true,
    images : []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading: false, images: this.getImages() })
    }, 1000);
  }

  handleTabbed = (tab) => {
    this.setState({ tab: tab })

    let images = this.getImages();    
    images = filter(images, ["type", tab === 1 ? "meme" : "gif"])

    this.animateNewImages(images);

    window.history.pushState({tab: tab}, "tab 1", "?searching=" + this.state.searching);
  }

  getImages(){
    return IMAGES.slice(0,50).map( img => {
      const src = img.src;
      const ext = src.substring(src.lastIndexOf(".") + 1);
      img.type = ext === "gif" ? "gif" : "meme";

      return img;
    })
  }

  animateNewImages(images){
    const main = document.querySelector("main");

    main.classList.add("change");

    main.addEventListener("animationend", () => {
        main.classList.remove("change");
    });

    //set newly filtered images only after the view has faded out down
    setTimeout(() => {
      this.setState({images: images});
    }, 100);
  }

  render() {
    return (
      <div className="App">
        <MiniRouter/>

        <Header loading={this.state.loading} tab={this.state.tab} onTabbed={this.handleTabbed}/>

        <main>
          <MemeGifList loading={this.state.loading} images={this.state.images}/>
        </main>
      </div>
    );
  }
}

export default App;
