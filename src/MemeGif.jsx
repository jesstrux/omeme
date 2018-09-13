import React from "react";
import Img from 'react-image'

const MemeGif = ({ image }) => {
  const { h, w, thumb } = image;

  let width, height;
  const W = window.innerWidth;
  let dividend = 5;
  
  if ( W >= 1100 ) {
    dividend = 4;
  }
  else if ( W >= 700 ) {
    dividend = 3;
  }
  else if ( W < 700) {
    dividend = 2;
  }

  const WS = ( W - 32 ) / dividend;

  if (w > h) {
    height = WS * 5 / 7;
    width = Math.min(Math.max(w * 300 / h, WS), WS);
  } else {
    width = WS;
    height = Math.min(Math.max(h * 300 / w, WS ), WS * 7 / 5);
  }

  let styles = { width: width, height: height };

  return (
    <div className="meme-gif" style={styles}>
      <Img src={thumb} alt=""/>
    </div>
  )
};

export default MemeGif;
