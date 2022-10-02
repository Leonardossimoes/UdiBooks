import React from 'react';
import "../Components.css/showcase.css";
import SliderProducts from '../Components/SliderProducts';
import {popularProducts} from "../data";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useRef } from 'react';


const Showcase = (props) => {

  const ShowCaseSize = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    ShowCaseSize.current.scrollLeft -= (ShowCaseSize.current.offsetWidth)/3;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    ShowCaseSize.current.scrollLeft += (ShowCaseSize.current.offsetWidth)/3;
  }

  return (
    <div className='main-container'>

      <div className='exclusive-offers-header'>
        <p className='exclusive-offers-title'>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>

      <div className='exclusive-offers-main-container' ref={ShowCaseSize}>

        <div className='exclusive-offers-products'>
          <SliderProducts items={props.items}/>
        </div>

        <div className="prev-next-buttons">
         <MdNavigateBefore className='prev-button' onClick={handleLeftClick}/>
         <MdNavigateNext className='next-button' onClick={handleRightClick}/>
        </div>


      </div>

    </div>

  )
}

export default Showcase;