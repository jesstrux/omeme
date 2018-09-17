import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from 'react-image'

import './App.css';

import MemeGifList from '../../components/MemeGifList/MemeGifList';
import Header from '../../components/Header/Header';

const ACTION_MAP = {
  SWITCH_TAB : "SWITCH_TAB",
  SEARCH : "SEARCH",
  VIEW_IMAGE : "VIEW_IMAGE",
  HIDE_IMAGE : "HIDE_IMAGE"
};

class App extends Component {
  onAction(action, data){
    switch (action) {
      case ACTION_MAP.SWITCH_TAB:
        console.log("Switch tabs to: ", data);
        break;

      case ACTION_MAP.SEARCH:
        console.log("Search for: ", data);
        break;
      
      case ACTION_MAP.VIEW_IMAGE:
        console.log("View image: ", data);
        break;

      case ACTION_MAP.HIDE_IMAGE:
        console.log("Hide image");
        break;
    
      default:
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <Header tab={ this.props.tab }
          loading={ this.props.loading} 
          onTabbed={ ( tab ) => this.onAction( ACTION_MAP.SWITCH_TAB,  tab ) }
          onSearch={ ( str ) => this.onAction( ACTION_MAP.SEARCH, str ) }
          showsearch
          showtitle
          showtabs
          />

        <main>
          <MemeGifList images={ this.props.images }
            onViewImage={ image => this.onAction( ACTION_MAP.VIEW_IMAGE, image ) } />

          { this.props.showimage && this.props.image &&
            <div id="modal" onClick={ () => this.onAction( ACTION_MAP.HIDE_IMAGE ) }>
              <Img src={this.props.image.src} />
            </div> 
          } 
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    showimage: true,
    image: {h: 1400, w: 1400, src: "https://i.imgur.com/MWguJ5Q.jpg", thumb: "https://i.imgur.com/MWguJ5Qm.jpg", size: 239662},
    tab: 0
  };
}

export default connect(mapStateToProps)(App);
