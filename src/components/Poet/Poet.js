import React from 'react';
import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const {name, img, dateOfBirth, totalBook, bookPrice, dateOfDeath} = props.poet || {}

    return (
        <div className="information-container p-3">
            <div>
            <div className='images'>
               <img style={{width:'150px',margin:'10px 65px', height: '150px'}} src={img} alt="" />
            </div>
            <div>
               <h4>{name}</h4>
               <p>Birth: {dateOfBirth}</p>
               <p>Death: {dateOfDeath}</p>
               <p>Total Book: {totalBook}</p>
               <p>Average Book Price: {bookPrice}</p>
               <button 
               onClick = { () => props.handleAddToCart(props.poet)}
               className = 'regular-btn'><i class="fas fa-shopping-cart"></i> add to cart</button>
            </div>
            </div>
        </div>
    );
};

export default Poet;