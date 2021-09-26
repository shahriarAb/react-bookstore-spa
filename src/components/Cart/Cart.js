import React from 'react';

const Cart = (props) => {
    //get data from Books.js via props
    const { cart } = props;
    // this function is used for calculate total price
    const totalSold = cart.reduce((accumulator, current) => accumulator + current.copiesSold, 0);

    return (
        <div className="text-center mt-3">
            <h4>Books Added: <span className="fw-bold">{cart.length}</span></h4>
            <h3>Total Sold: <span className="fw-bold">{totalSold}</span>M</h3>
            <ul style={{ listStyle: 'none' }}>
                {
                    cart.map(bookName => <li
                        key={bookName.id}
                        className="fw-bold fs-5 border border-3 rounded-3 border-info mb-2"
                    >{bookName.name}</li>)
                }
            </ul>
            <button className="btn btn-outline-info fw-bold"><i className="fas fa-shopping-bag"></i> Buy Books Now</button>
        </div>
    );
};

export default Cart;