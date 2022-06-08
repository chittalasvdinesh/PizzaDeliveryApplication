import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
export default function Home() {
    return (
        <>
            <div className='container'>
                <Header />

                <section>
                    <h2>Pizza Delivery</h2>
                    <h6>Welcome tp pizza delivery service. This is the place when you may chose the most delicious pizza you like from wide variety of options </h6>
                    <p>we're performing delivery free of charge in case if your order is higher than 20$</p>
                    <Link className='btn btn-dark' to="/signup">Sign In andn Order</Link>
                </section>
            </div>

        </>
    )
}
