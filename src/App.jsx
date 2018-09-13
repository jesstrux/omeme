import React, { Component } from 'react';
import Masonry from 'react-masonry-css'
import MemeGif from "./MemeGif";
import { IMAGES } from "./images";
import logo from './logo.png';
import './App.css';

class App extends Component {
  state = {
    images : IMAGES.slice(0,20)
  };

  render() {
    const breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 3,
      500: 2
    };

    return (<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">Omeme</span>
          <input type="text" placeholder="Search for gifs & memes..."/>
          <button>CREATE</button>
        </header>
        <main>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            { this.state.images.map( (img, index) => (
              <MemeGif image={img} key={index} />
            ))}
          </Masonry>
        </main>
      </div>
    );
  }
}

export default App;
