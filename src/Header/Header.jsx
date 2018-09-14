import React from "react";
import logo from '../logo.png';
import './Header.css';

// components
import Tabs from "./Tabs";

const Header = ( props ) => {
    const { loading } = props;

    function handleClearSearch(){
      document.querySelector("#searchWrapper input").value = "";
      props.onSearch("");
    }

    return ( 
        <header className={'App-header' + (loading ? ' loading' : '')}>
          <div id="toolbar">
            <img src={logo} className="App-logo" alt="logo" />
              <span className="App-title">Omeme</span>
              <div id="searchWrapper">
                <input type="text" required placeholder="Search for gifs & memes..."
                  onKeyUp={ e => props.onSearch(e.target.value) } />
                
                <button onClick={ handleClearSearch }>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              </div>
            <button>CREATE</button>
          </div>

          <Tabs tab={props.tab} onTabbed={ tab => props.onTabbed(tab)}/>
        </header>
     );
}
 
export default Header;