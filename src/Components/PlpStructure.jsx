import React from 'react';
import { booksRomance } from '../data';
import PlpProducts from './PlpProducts';
import "../Components.css/plpstructure.css"

const PlpStructure = (props) => {
  return (
    <div className='main-plp-structure'>
      <PlpProducts className="testeabc" items={props.items}/>
    </div>
  )
}

export default PlpStructure;
