import React from 'react';
import Navbar from '../Components/Navbar';
import PlpStructure from '../Components/PlpStructure';
import {booksRomance, popularProductsHeader, shortBanners, categorieDropdown} from "../data";
import Footer from "../Components/Footer";
import ShortBanner from "../Components/ShortBanner"
import "./plp.css"


const PLP = (props) => {

  return (
    <div className='main-plp'>
      <Navbar/>
      <h2 className='plp-main-title'>{props.title}</h2>
      <div className="plp-container">
      <div className="plp-products-section">
          <PlpStructure items={props.data} />
      </div>
      </div>      
      <ShortBanner banner={shortBanners[1].img}/>
      <Footer/>    
    </div>
  )
}

export default PLP;
