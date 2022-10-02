import React from 'react';
import "../Components.css/dropdown.css";
import {categorieDropdown} from "../data";

const Dropdown = () => {
  return (
    <div className='main-dropdown-container'>
        {
            {categorieDropdown} && categorieDropdown.map((n) => (
                <div className="menu-items">
                    <img className='menu-item-image' src={n.svg} width="30" height="30" alt=""/>
                    <a className='menu-item-title' href={n.endpoint}>{n.title}</a>
                </div>
            ))
        }
    </div>
  )
}

export default Dropdown