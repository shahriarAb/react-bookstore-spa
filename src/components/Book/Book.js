import React from 'react';
import Rating from 'react-rating';
import './Book.css'

const Book = (props) => {
    // destructuring data from Books.js via props
    const { name, author, publishYear, genre, copiesSold, img, rating } = props.book;

    return (
        <div className="col">
            <div className="card border border-2 rounded-3 card-container">
                <div className="text-center mt-3">
                    <img src={img} className="border border-3 border-dark" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">{name}</h5>
                    <p>Author: <b>{author}</b></p>
                    <p>Publish Year: <b>{publishYear}</b></p>
                    <p>Genre: <b>{genre}</b></p>
                    <p>Copies Sold: <b>{copiesSold}M</b></p>
                    <p className="d-inline-block">Rating: </p>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star text-secondary"
                        fullSymbol="fas fa-star text-warning"
                        readonly
                    ></Rating>
                    <div className="text-center mt-3">
                        <button
                            className="cart-btn"
                            onClick={() => props.handleAddingCart(props.book)}
                        ><i className="fas fa-shopping-cart"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;