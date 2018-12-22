import React from "react";
import PhotoGallery from "react-photo-gallery";

import bath from '../assets/temp/bath.jpg';
import bath2 from '../assets/temp/bath2.jpg';
import deck from '../assets/temp/deck.jpg';
import deck2 from '../assets/temp/deck2.jpg';
import kitchen from '../assets/temp/kitchen.jpg';
import kitchen2 from '../assets/temp/kitchen2.jpg';

class Gallery extends React.Component{
  render() {
    
    return (
      <div className="gallery-container">
       <PhotoGallery photos={photoSet}/>
      </div>
    );
  }
}

const photoSet = [
  {
    src: bath,
    width:1.5,
    height: 1,
  },
  {
    src:bath2,
    width:1.5,
    height: 1,
  },
  {
    src:kitchen,
    width:2,
    height: 2,
  },
  {
    src:kitchen2,
    width:2,
    height: 2,
  },
  {
    src:deck,
    width:2,
    height: 1,
  },
  {
    src:deck2,
    width:1.5,
    height: 2,
  },
]
export default Gallery;