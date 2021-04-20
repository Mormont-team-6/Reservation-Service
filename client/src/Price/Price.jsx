import React, {useState} from 'react';
import './Price.css';

const Price = (props) => {
  return (
    <div>
      <div className="price-part-em"> ${props.price} <span className="night-em">/night </span></div>
    </div>
  );
};
export default Price;