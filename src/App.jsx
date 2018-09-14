import React, { Component } from 'react';
// import { IMAGES } from "./images";
import { BASE_URL, query, formatImages, formatSearchImages } from "./api";

import { filter, cloneDeep, debounce } from "lodash";
import './App.css';
import MiniRouter from "./MiniRouter";

import loader from "./loader.svg"

// components
import Header from "./Header/Header";
import MemeGifList from "./MemeGifList/MemeGifList";

class App extends Component {
  state = {
    tab: 0,
    searching: false,
    query_string: "",
    loading: false,
    loadError: null,
    images : [],
    searchImages: [],
    filteredImages: []
  };

  componentDidMount(){
    this.fetchImages();
  }

  handleTabbed = (tab) => {
    this.setState({ tab: tab })

    this.animateNewImages(this.getImages(tab));

    window.history.pushState({tab: tab}, "tab 1", "?searching=" + this.state.searching);
  }
  
  handleSearch = debounce((q) => {
    if(q && q.length){
      if(this.state.query_string.length && q.toLowerCase() === this.state.query_string.toLowerCase())
        return;

      this.searchImages(q);
    }
    else
      this.setState({ query_string: "", searching: false, filteredImages: [] });
      this.animateNewImages(this.getImages(-1));
  }, 1000)

  fetchImages(){
    this.setState({ loading: true, loadError: false, tab: 0, images: [], filteredImages: [] });

    // "/g/memes",
    query(BASE_URL + "/gallery/lJzTY")
      .then(( res ) => {
        this.setState({ loading: false, images: formatImages(res) })
        this.animateNewImages(this.getImages(-1));
      })
      .catch( err => {
        console.log(err);
        this.setState({ loading: false, loadError: err })
      })
  }
  
  searchImages(query_string){
    this.setState({ loading: true, loadError: false, tab: 0, searching: true, searchImages: [], filteredImages: [] });

    query(BASE_URL + "/gallery/search?q="+query_string)
      .then(( res ) => {
        this.setState({ loading: false, searchImages: formatSearchImages(res) })
        this.animateNewImages(this.getImages(-1));
      })
      .catch( err => {
        console.log(err);
        this.setState({ loading: false, loadError: err })
      })
  }

  getImages(tab){
    let images;
    if(this.state.searching)
      images = cloneDeep(this.state.searchImages);
    else 
      images = cloneDeep(this.state.images);

    images = images.slice(0,50).map( img => {
      const src = img.src;
      const ext = src.substring(src.lastIndexOf(".") + 1);
      img.type = ext === "gif" ? "gif" : "meme";

      return img;
    });

    if(tab === -1 || tab === 0)
      return images
    else 
      return filter(images, ["type", tab === 1 ? "meme" : "gif"])
  }

  animateNewImages(images){
    const imagesWrapper = document.querySelector("#imagesWrapper");
    imagesWrapper.classList.add("change");
    imagesWrapper.addEventListener("animationend", () => {
        imagesWrapper.classList.remove("change");
    });

    //set newly filtered images only after the view has faded out down
    setTimeout(() => {
      this.setState({filteredImages: images});
    }, 100);
  }

  render() {
    return (
      <div className="App">
        <MiniRouter/>

        <Header loading={this.state.loading} 
          tab={this.state.tab} 
          onTabbed={this.handleTabbed}
          onSearch={this.handleSearch}/>

        <main>
          {this.state.loading && (<img id="loader" src={loader} alt="loader" />)}

          <div id="imagesWrapper">
            <MemeGifList images={this.state.filteredImages}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
