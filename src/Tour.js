import React, {useState} from 'react';
import './App.css';

const Tour = ({id, name, image, info, price}) => {


    return ( 
        <div className="tour">
            <h3>{name}</h3>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info1">
                <span className=''>
                    hello
                </span>
                <span className="price">
                    {price} $
                </span>
            </div>
            <div className="info2">
                {info}
            </div>
        </div>
     );
}
 
export default Tour;