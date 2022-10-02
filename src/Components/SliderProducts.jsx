import React from 'react';
import "../Components.css/sliderproducts.css";
import {popularProducts} from "../data";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";

const SliderProducts = (props) => {
  return (
    <div className='products-main-container'>
        {
            props.items && props.items.map((n) => (
                <div className="popular-product-card">
                  {
                    n.discount > 0 &&(
                      <div className="discount-product-tag">
                        <p>{n.discount}% <AiOutlineArrowDown/></p>
                      </div>
                    )
                  }
                    <img className='product-image' key={n.id} src={n.img} width="150" height="250" alt="" srcset="" />
                    {
                      n.rating && n.rating === 5 && (
                        <div className='rating-section'>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    {
                      n.rating && n.rating === 4 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    {
                      n.rating && n.rating === 3 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    {
                      n.rating && n.rating === 2 && (
                        <div>
                          <AiFillStar className='rating-icon'/><AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    {
                      n.rating && n.rating === 1 && (
                        <div>
                          <AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    {
                      n.rating && n.rating === 0 && (
                        <div>
                          <AiFillStar className='rating-icon'/>
                        </div>
                      )
                    }
                    <p className='product-title'>{n.title}</p>
                    <p className='product-price'>R$ {n.price}</p>
                    <p className='product-price-break'>ou {n.break}x de R$ {(n.price/n.break).toFixed(2)} sem juros</p>
                    <a href={n.endpoint}><button className='product-buy-button'>Conferir</button></a>
                </div>
            ))
        }
    </div>
  )
}

export default SliderProducts;