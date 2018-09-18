import React from "react";
import logo from '../../logo.png';
import './Header.css';

import { Link } from "react-router-dom";

// components
import Tabs from "./Tabs";

const Header = ( props ) => {
    const { loading, showtabs, hasback, routerBack, dark } = props;

    function handleClearSearch(){
      document.querySelector("#searchWrapper input").value = "";
      props.onSearch("");
    }

    function getClasses() {
      let classes = 'App-header';
      classes += (loading ? ' loading' : '');
      classes += ( !showtabs ? ' no-tabs' : '' );
      classes += ( dark ? ' dark' : '' );
      classes += ( hasback ? ' has-back' : '');

      return classes;
    }

    return ( 
        <header className={ getClasses() }>
          <div id="toolbar">
            
            { hasback && !routerBack && (
                <button id="backButton" onClick={ props.onBackPressed }>
                  <svg width="28" height="28" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                </button>
              )
            }

            { hasback && routerBack && (
                <Link id="backButton" to="/">
                  <svg width="28" height="28" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                </Link>
              )
            }
            
            <img src={logo} className="App-logo" alt="logo" />

            { props.showtitle && <span className="App-title">Omeme</span> }

            { props.showsearch && 
              <div id="searchWrapper">
                <input type="text" required placeholder="Search for gifs & memes..."
                  onKeyUp={ e => props.onSearch(e.target.value) } />
                
                <button onClick={ handleClearSearch }>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              </div>
            }

            <div id="slotActions">
              { props.slotActions }
            </div>
          </div>

          { showtabs && <Tabs tab={props.tab} onTabbed={ tab => props.onTabbed(tab) }/> }
        </header>
     );
}
 
export default Header;