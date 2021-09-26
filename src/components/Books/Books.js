import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./bookdata.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleAddingCart = book => {
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-7">
                    <h5 className="mt-3">Some bestselling books of all time</h5>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            books.map(book => <Book
                                key={book.id}
                                book={book}
                                handleAddingCart={handleAddingCart}
                            ></Book>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 border-start">
                    <div className="sticky-top">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;