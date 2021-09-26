import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const totalPrice = cart.reduce((accumulator, current) => accumulator + current.price, 0);

    return (
        <div className="text-center mt-3">
            <h4>Books Added: <span className="fw-bold">{cart.length}</span></h4>
            <h3>Total Cost: <span className="fw-bold">{totalPrice}</span>/-</h3>
            <ul style={{ listStyle: 'none' }}>
                {
                    cart.map(bookName => <li
                        key={bookName.id}
                        className="fw-bold fs-5 border border-3 rounded-3 border-info mb-2"
                    >{bookName.name}</li>)
                }
            </ul>
            <button className="btn btn-outline-info fw-bold">Go to Payment Page</button>
        </div>
    );
};

export default Cart;