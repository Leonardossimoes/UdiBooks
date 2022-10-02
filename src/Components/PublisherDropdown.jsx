import React from 'react';
import "../Components.css/dropdown.css";
import {publisher} from "../data";

const PublisherDropdown = () => {
  return (
    <div className='main-dropdown-container'>
        {
            {publisher} && publisher.map((n) => (
                <div className="menu-items">
                  <a className='menu-item-title' href={n.endpoint}><li className='menu-item-title'>{n.publisher}</li></a>
                    
                </div>
            ))
        }
    </div>
  )
}

export default PublisherDropdown
