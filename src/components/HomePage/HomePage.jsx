import React from 'react';

import './HomePage.css';

import loader from "../../loader.svg"

// components
import Header from "../Header/Header";
import MemeGifList from "../MemeGifList/MemeGifList";


const HomePage = ( props ) => {
    const { tab, imagesChanging, loading, filteredImages } = props;
    
    return (
        <React.Fragment>
            <Header loading={loading} 
                showsearch 
                showtabs
                tab={tab} 
                slotActions={<button id="createButton" onClick={props.onCreate}>CREATE</button>}
                onTabbed={ ( tab ) => props.onTabbed( tab ) }
                onSearch={ ( str ) => props.onSearch( str ) }/>
    
            <div id="content">
                {loading && (<img id="loader" src={loader} alt="loader" />)}
                
                { !loading && filteredImages.length !== 0 &&
                    <MemeGifList images={filteredImages} imagesChanging={imagesChanging}
                        onViewImage={ image => props.onViewImage(image) }
                        onImagesAnimated={ props.onImagesAnimated } />
                }
            </div>
        </React.Fragment>
    )
}
 
export default HomePage;