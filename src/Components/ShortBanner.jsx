import React from 'react';
import "../Components.css/shortbanner.css";

const ShortBanner = (props) => {
  return (
    <div className='short-banner-main-container'>
        <img className='short-banner-image' src={props.banner} alt="" srcset="" />
    </div>
  )
}

export default ShortBanner;