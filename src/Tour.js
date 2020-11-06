import React, {useState} from 'react';
import './App.css';

const Tour = ({id, name, image, info, price}) => {

    const [readMore, setReadMore] = useState(false)

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
                <p>
                    {readMore? (
                        <div>
                            {info}
                            <button onClick={()=> setReadMore(!readMore)}>Read Less</button>
                        </div>
                    ):(
                        <div>
                            {info.substring(0, 100)}
                            <button onClick={()=> setReadMore(!readMore)}>Read More</button>
                        </div>
                    )}
                </p>
            </div>
        </div>
     );
}
 
export default Tour;