import React from 'react';

import className from 'classnames'
import Swiper from 'react-id-swiper';

import "../../../node_modules/swiper/css/swiper.min.css";
import "./style.css"

import {
  Container,
  ItemFirst,
  ItemSecond,
  ItemThird,
} from './styles.js';


const DEFAULT_OPTIONS = {
  spaceBetween: 24,
  grabCursor: true,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true
}

const params = {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}


class Carousel extends React.Component {  
render() {
    return(
        <div className="container">
        <Swiper {...params} className="swiper">
          {/* <ItemFirst>Slide #1</ItemFirst>
          <ItemSecond>Slide #2</ItemSecond>
        <ItemThird>Slide #3</ItemThird> */}
          <div className="firstSlide">
            <h1 className="itemSize">Сочи Парк Отель 3</h1>
            <p className="itemSizeStars">⭐⭐⭐</p>
          </div>
          <div className="secondSlide">2</div>
        </Swiper>
        </div>
    )
  }
}

export default Carousel;
