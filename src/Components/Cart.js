import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { cartCount } from '../App';


export default function Cart() {
    const { AddItem } = useContext(cartCount)
    const [cartItem, setCartItem] = useState([])
    

    const navigate = useNavigate()

    
    useEffect(() => {
        if (localStorage.getItem('cartDetails') !== undefined) {
            let dataItems = JSON.parse(localStorage.getItem('cartDetails'));
            setCartItem(dataItems);
        }
    }, [])


    let total = 0

    const delProduct = (id) => {
        let array = JSON.parse(localStorage.getItem('cartDetails'))
        if (array.some(element =>
            element.id === id
        )) {
            let i = 0;
            let num;
            array.forEach(element => {
                if (element.id === id) {
                    num = i
                }
                i = i + 1;
            });
            let localArray = JSON.parse(localStorage.getItem("cartDetails"));
            localArray.splice(num, 1);
            let strarr = JSON.stringify(localArray);
            localStorage.setItem("cartDetails", strarr);



            let localArray1 = JSON.parse(localStorage.getItem("mycart"));
            localArray1.splice(num, 1);
            let strarr1 = JSON.stringify(localArray1);
            localStorage.setItem("mycart", strarr1);
            AddItem(localArray1);

            let dataItems = JSON.parse(localStorage.getItem('cartDetails'));
            setCartItem(dataItems);
        }
    }

    const checkout = () => {
        if (total === 0) {
            alert('please add items to checkout')
        }
        else {
            navigate('/login/home/order')

        }

    }



    //  console.log(itemArray)

    return (
        <div className='container'>
            <h2>Shopping cart</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Pizza</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItem.map((item, index) =>
                        <tr key={index}>
                            <td><img src={item.url} alt={item.name} width={50} /></td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>1</td>
                            <td>
                                <button className='btn btn-dark' onClick={() => delProduct(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{cartItem.forEach(item => {
                            total += parseFloat(item.price)
                        })} ${total.toFixed(2)}</td>
                        <td>
                            <button className='btn btn-secondary' onClick={checkout}>Check out </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
