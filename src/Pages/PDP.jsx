import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import "./pdp.css";
import { AiFillStar } from "react-icons/ai";


const PDP = (props) => {

  return (
    <div className='main-pdp'>
      <Navbar/>
      <div className="pdp-structure">
        <div div className="pdp-structure-content">
          <div className="pdp-structure-content-image">
            <img src={props.image} className="pdp-main-product-image" alt=""/>
          </div>

          <div className="pdp-structure-content-info">
            <h2 className='pdp-main-title'>{props.title}</h2>
            {
                      props.rating && props.rating === 5 && (
                        <div className='rating-section'>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/> ({props.rating})
                        </div>
                      )
                    }
                    {
                      props.rating && props.rating === 4 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/> ({props.rating})
                        </div>
                      )
                    }
                    {
                      props.rating && props.rating === 3 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/> ({props.rating})
                        </div>
                      )
                    }
                    {
                      props.rating && props.rating === 2 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/> ({props.rating})
                        </div>
                      )
                    }
                    {
                      props.rating && props.rating === 1 && (
                        <div>
                          <AiFillStar className='rating-icon'/> ({props.rating})
                        </div>
                      )
                    }
                    {
                      props.rating && props.rating === 0 && (
                        <div>
                          <AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
            <h2 className='pdp-product-description'>Descrição</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates odit praesentium at, iure nemo quis repudiandae in nisi vitae repellendus corrupti omnis vero vel facere eaque dolores veniam mollitia perspiciatis?</p>
            <h2 className='pdp-product-price'>R${props.price}</h2>
            <p>ou {props.break}x de R$ {(props.price/props.break).toFixed(2)} sem juros</p>
            <button className='pdp-buy-button'><a href="">Comprar</a></button>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default PDP;
