import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="input-group w-50">
                        <input type="text" className="form-control" placeholder="Search your favourite books" aria-label="Search your favourite books" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white btn-outline-secondary rounded" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/links">Links</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/links">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/links">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 text-white btn-outline-secondary rounded" href="/aboutus">About us</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-light ms-3"><i className="fas fa-user-alt"></i> Sign in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container text-center bg-info p-2 border border-top-0 border-3 border-success rounded-bottom">
                <h1>Favourite BookStore <i className="fas fa-book"></i></h1>
                <p>A place where you get best books with decent price</p>
            </div>
        </>
    );
};

export default Header;