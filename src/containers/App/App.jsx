import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

import Img from 'react-image'

import './App.css';

import loader from "../../loader.svg"

import MemeGifList from '../../components/MemeGifList/MemeGifList';
import Header from '../../components/Header/Header';
import DetailPage from '../../components/DetailPage/DetailPage';

class App extends Component {
  componentWillMount(){
    this.props.actions.fetchImages();
  }

  render(){
    return (
      <div className="App">
        <Header tab={ this.props.tab }
          onTabbed={ this.props.actions.switchTabs }
          showtitle
          showtabs
          />

        <main>
          {this.props.loading && (<img id="loader" src={loader} alt="loader" />)}

          <MemeGifList images={ this.props.images }
            onViewImage={ this.props.actions.viewImage } />

          { this.props.showimage && this.props.image &&
            <DetailPage image={ this.props.image }
              onGoBack={ this.props.actions.hideImage } />
          } 
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images.filtered,
    loading: false,
    showimage: state.image.show,
    image: state.image.data,
    tab: state.tabs.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
