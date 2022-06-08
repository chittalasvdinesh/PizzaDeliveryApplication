import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { cartCount } from '../App';
export default function Order() {
    const { count, AddItem } = useContext(cartCount)
    const navigate = useNavigate()

    const paymentSuccess = () => {
        localStorage.clear()
        navigate('/login/home/success');
        AddItem([])
    }

    return (
        <>
            <div className='container'>
                <h2>Checkout</h2>
                <form onSubmit={paymentSuccess}>
                    <div className='form-group'>
                        <label>Credit card</label>
                        <input type="text" className='form-control' />
                    </div>
                    <input type="submit" value="checkout" className="btn btn-dark" />
                </form>


            </div>

        </>
    )
}
