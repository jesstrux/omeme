import React, { Component } from 'react';
import { IMAGES } from "./images";
import './App.css';
import MiniRouter from "./MiniRouter";

// components
import Header from "./Header/Header";
import MemeGifList from "./MemeGifList/MemeGifList";

class App extends Component {
  state = {
    images : IMAGES.slice(0,50).map( img => {
      const src = img.src;
      const ext = src.substring(src.lastIndexOf(".") + 1);
      img.type = ext === "gif" ? "gif" : "meme";

      return img;
    })
  };

  handleTabbed(page){
    console.log("Tab to page", page);
    // history.pushState({page: 1}, "title 1", "?page=1");
  }

  render() {
    return (
      <div className="App">
        <MiniRouter/>

        <Header onTabbed={this.handleTabbed}/>

        <main>
          <MemeGifList images={this.state.images}/>
        </main>
      </div>
    );
  }
}

export default App;
