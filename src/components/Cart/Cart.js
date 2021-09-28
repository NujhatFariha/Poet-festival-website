import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props
    let total = 0;
    for (const information of cart){
        total = total + information.book;
    };

    let name = '';
    for (const poetName of cart){
        name = name + poetName.name;
    }

    return (
        <div className='cart-container'>
            <div className="text-center">
            <h1 className="mb-4 mt-5 " style={{color: 'darkslateblue'}}>Hire Poet</h1>
            <h4 className="fs-3">poets added:{props.cart.length}</h4>
            <p className="fs-4 fw-bold">total Cost: </p>
            <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Cart;