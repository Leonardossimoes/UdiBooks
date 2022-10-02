import React, {useState} from 'react';
import { useRef } from 'react';
import "../Components.css/mainslider.css";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";
import {sliderItems} from "../data"

const MainSlider = () => {

const sliderSize = useRef(null);

const LeftClick = (e) => {
  e.preventDefault();
  sliderSize.current.scrollLeft -= (sliderSize.current.offsetWidth);
}

const RightClick = (e) => {
  e.preventDefault();
  sliderSize.current.scrollLeft += (sliderSize.current.offsetWidth);
}

return(
  <div className="main-slider" ref={sliderSize}>
    {
      sliderItems && sliderItems.map((n) => (
        <div className="main-image-slider">
          <img className='slider-image' src={n.img}/>
        </div>
      ))
    }
      <div className="prev-next-button">
        <MdNavigateBefore className='prev-button' onClick={LeftClick}/>
        <MdNavigateNext className='next-button' onClick={RightClick}/>
      </div>   

  </div>

)
}
export default MainSlider;