import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.YhN6VVLDCV_HViRyqg_h9AHaF7&pid=Api&P=0&w=198&h=158" alt="logo" width={100} />
                    </a>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item border border-dark me-3">
                                    <Link className="nav-link active" to="/signup">Sign up</Link>
                                </li>
                                <li className="nav-item border border-dark">
                                    <Link className="nav-link active" to="/login">Login</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
