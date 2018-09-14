import React from "react";
import logo from '../logo.png';
import './Header.css';

// components
import Tabs from "./Tabs";

const Header = ( props ) => {
    const { loading } = props;

    return ( 
        <header className={'App-header' + (loading ? ' loading' : '')}>
          <div id="toolbar">
            <img src={logo} className="App-logo" alt="logo" />
              <span className="App-title">Omeme</span>
              <input type="text" placeholder="Search for gifs & memes..."/>
            <button>CREATE</button>
          </div>

          <Tabs tab={props.tab} onTabbed={ tab => props.onTabbed(tab)}/>
        </header>
     );
}
 
export default Header;