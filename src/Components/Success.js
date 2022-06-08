import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <div className='container'>
            <h2>Order has been successfuly placed</h2>
            <p className='bg-success p-2'>Your receive notifications by email with your details</p>
            <Link to="/login/home/menu" className='btn btn-dark'>Go an order some more</Link>

        </div>
    )
}
