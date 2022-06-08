import React, { useContext, useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

import { cartCount, userDetail } from '../App';

export const orderValue = React.createContext();
export default function ProductsHeader() {
    const { count} = useContext(cartCount)
    const { username,onChangeUser} = useContext(userDetail);
    const [order, setOrder] = useState(0);
    console.log(username)

    const onValueChange = (value) => {
        setOrder(value);
    }

    return (
        <>
            <orderValue.Provider value={{ order, onValueChange }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container d-flex justify-content-between">
                        <a className="navbar-brand" href="#0">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.YhN6VVLDCV_HViRyqg_h9AHaF7&pid=Api&P=0&w=198&h=158" alt="logo" width={100} />
                        </a>
                        <div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item me-3">
                                        <Link className="nav-link active" to="/login/home/menu">Menu</Link>
                                    </li>
                                    <li className="nav-item me-3">
                                        <Link className="nav-link active" to="/login/home/cart">Cart {count.length}</Link>
                                    </li>
                                    <li className="nav-item border border-dark me-3">
                                        <Link className="nav-link active" to="/login/home/logout">Logout</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <h1>Hi! {username}</h1>
                </div>
                <Outlet />
            </orderValue.Provider>
        </>
    )
}
