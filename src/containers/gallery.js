import React from "react";
import PhotoGallery from "react-photo-gallery";

import bath from '../assets/temp/bath.jpg';
import bath2 from '../assets/temp/bath2.jpg';
import deck from '../assets/temp/deck.jpg';
import deck2 from '../assets/temp/deck2.jpg';
import kitchen from '../assets/temp/kitchen.jpg';
import kitchen2 from '../assets/temp/kitchen2.jpg';
import $ from 'jquery';
import slick from 'slick-carousel';

class Gallery extends React.Component{
  componentDidMount() {
    function createSlick(){

      $(".your-class").not('.slick-initialized').slick({
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.your-nav',
        responsive: [{
          breakpoint: 500,
          settings: {
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
      $('.your-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.your-class',
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // nextArrow:'<i class="fas fa-chevron-circle-right"></i>',
        prevArrow:'<span><i class="fas fa-chevron-circle-left"></i><span>',
        // variableWidth: true,
      });	
    }
    $(window).on('resize', createSlick);
    createSlick()
  }


  render() {
    
    return (
      <div className="gallery-container">
        {/* <section className="slick">

        <div className="your-class">
          <div><img src={bath} /></div>
          <div><img src={bath2} /></div>
          <div><img src={kitchen} /></div>
          <div><img src={kitchen2} /></div>
          <div><img src={deck} /></div>
        </div>
        <div className="your-nav">
          <div><img src={bath} /></div>
          <div><img src={bath2} /></div>
          <div><img src={kitchen} /></div>
          <div><img src={kitchen2} /></div>
          <div><img src={deck} /></div>
        </div>
        </section> */}
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