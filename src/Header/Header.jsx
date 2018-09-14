import React from "react";
import logo from '../logo.png';
import './Header.css';

// components
import Tabs from "./Tabs";

const Header = ( props ) => {
    return ( 
        <header className="App-header">
          <div id="toolbar">
            <img src={logo} className="App-logo" alt="logo" />
              <span className="App-title">Omeme</span>
              <input type="text" placeholder="Search for gifs & memes..."/>
            <button>CREATE</button>
          </div>

          <Tabs page={props.page} onTabbed={ page => props.onTabbed(page)}/>
        </header>
     );
}
 
export default Header;