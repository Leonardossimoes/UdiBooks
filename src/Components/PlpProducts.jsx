import React, {useState} from 'react';
import "../Components.css/plpproducts.css";
import {popularProducts} from "../data";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";

const PlpProducts = (props) => {
 
  let array = props.items

  const [valor, setValor] = useState("");

    let BigPrice = () => {
      setValor(console.log(array.sort((a,b) => b.price - a.price)));
  }
  let LowPrice = () => {
    setValor(console.log(array.sort((a,b) => a.price - b.price)));
}
    let BigDiscount = () => {
    setValor(console.log(array.sort((a,b) => b.discount - a.discount)));
  }
  let BigRating = () => {
    setValor(console.log(array.sort((a,b) => b.rating - a.rating)));
  }
  let Clean = () => {
    setValor("");
    document.location.reload();
  }

  return (
        
    <div className='plp-products-main-container'>
      {valor}
      <div className="plp-products-filter">
        <h2 className='plp-products-filter-title'>Ordenar por</h2>
        <div className="plp-products-filter-boxes">
          <div className='filter-checkbox'><input type="checkbox" onChange={BigPrice}/>Maior Preço</div>
          <div className='filter-checkbox'><input type="checkbox" onChange={LowPrice}/>Menor Preço</div>
          <div className='filter-checkbox'><input type="checkbox" onChange={BigDiscount}/>Maior Desconto</div>
          <div className='filter-checkbox'><input type="checkbox" onChange={BigRating}/>Mais Relevante</div>
          <div ><input className='product-buy-button' value="Limpar Filtro" type="button" onClick={Clean}/></div>
        </div>
      </div>
      <div className="product-section-principal">
      {
            array && array.map((n) => (
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
                    <a className='product-buy-link' href={n.endpoint}><button className='product-buy-button'>Conferir</button></a>
                </div>
            ))
        }        
      </div>
    </div>
  )
}

export default PlpProducts;
