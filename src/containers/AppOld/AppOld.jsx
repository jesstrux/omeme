import React, { Component } from 'react';
import './App.css';

import { BASE_URL, query, formatImages, formatSearchImages } from "../../api";

import { filter, cloneDeep, debounce } from "lodash";

// components
import HomePage from "../../components/HomePage/HomePage";
import DetailPage from "../../components/DetailPage/DetailPage";
import CreatePage from "../../components/CreatePage/CreatePage";

class App extends Component {
  state = {
    cur_image: null,
    page: 'home',
    tab: 0,
    imagesChanging: true,
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
    this.setState({ tab: tab});
    this.animateImages(this.getImages(tab))
  }

  animateImages(images){
    this.setState({ imagesChanging: true });
    setTimeout(() => {
      this.setState({ filteredImages: images });
    }, 100);
  }
  
  handleImagesAnimated = () => {
    this.setState({ imagesChanging: false });
  }
    
  handleSearch = (q) => {
    if(q && q.length){
      if(this.state.query_string.length && q.toLowerCase() === this.state.query_string.toLowerCase())
        return;
      else{
        this.setState({ query_string: q});
      }

      //if first key start searching otherwise debounce
      if(this.state.query_string.length == 0){
        this.setState({ loading: true, loadError: false, tab: 0, searching: true, searchImages: [], filteredImages: [] });
      }
      
      this.searchImages(q);
    }else{
      this.setState({ query_string: "", searching: false, loading: false, searchImages: [] });
      this.animateImages(this.getImages(-1))
    }
  }

  fetchImages(){
    this.setState({ loading: true, loadError: false, tab: 0, images: [], filteredImages: [] });

    // "/g/memes",
    query(BASE_URL + "/gallery/lJzTY")
      .then(( res ) => {
        this.setState({ loading: false, images: formatImages(res) })
        this.setState({filteredImages: this.getImages(-1)});
      })
      .catch( err => {
        console.log(err);
        this.setState({ loading: false, loadError: err })
      })
  }
    
  searchImages = debounce((query_string) => {
    this.setState({ loading: true, loadError: false, tab: 0, searching: true, searchImages: [], filteredImages: [] });
    this.doSearch(query_string)
  }, 1000)

  doSearch(query_string){
    query(BASE_URL + "/gallery/search?q="+query_string)
      .then(( res ) => {
        if(this.state.searching){ //if searching wasn't cancelled
          this.setState({ loading: false, searchImages: formatSearchImages(res) })
          this.setState({filteredImages: this.getImages(-1, true)})
        }
      })
      .catch( err => {
        console.log(err);
        this.setState({ loading: false, loadError: err })
      })
  }

  getImages(tab, searching){
    let images;
    if(searching)
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

  handleViewImage = (image) => {
    this.setState({page: 'detail', cur_image: image})
  }
  
  handleGoHome = () => {
    this.setState({page: 'home', cur_image: null})
  }
  
  openCreate = () => {
    this.setState( {page: 'create' })
  }

  render(){
    return (
      <div className="App">
        <HomePage 
          loading={this.state.loading}
          filteredImages={this.state.filteredImages}
          tab={this.state.tab}
          imagesChanging={this.state.imagesChanging}
          onCreate={ this.openCreate } 
          onTabbed={ ( tab ) => this.handleTabbed( tab ) }
          onImagesAnimated={ this.handleImagesAnimated }
          onSearch={ ( str ) => this.handleSearch( str ) }
          onViewImage={ ( image ) => this.handleViewImage(image) }/>

        { this.state.page === 'detail' && 
          (<DetailPage image={ this.state.cur_image }
              onGoBack={ this.handleGoHome } />) 
        }
        
        { this.state.page === 'create' && 
          (<CreatePage
              onGoBack={ this.handleGoHome } />) 
        }
      </div>
    );
  }
}

export default App;