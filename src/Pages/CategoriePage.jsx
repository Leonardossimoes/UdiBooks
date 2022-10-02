import React from 'react'
import Navbar from '../Components/Navbar';
import { categorieDropdown } from '../data';
import "./categoriepage.css";
import "../App"

const CategoriePage = (props) => {
  return (
    <div>
        <Navbar/>
        <div className="categorie-page-main-container">
            {
                props.data && props.data.map((n) => (
                    <div className="categorie-page-item">
                        <a href={n.endpoint}><h2 className='categorie-page-text'>{n.title}</h2></a>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CategoriePage