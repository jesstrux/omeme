import React, { Component } from 'react';
import './App.css';

// components
import HomePage from "./HomePage/HomePage";
import DetailPage from "./DetailPage/DetailPage";
import CreatePage from "./CreatePage/CreatePage";

class App extends Component {
  state = {
    cur_image: null,
    page: 'home'
  };

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
        { 
          this.state.page === 'home' && 
          <HomePage onCreate={ this.openCreate } onViewImage={ ( image ) => this.handleViewImage(image) }/>
        }

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
