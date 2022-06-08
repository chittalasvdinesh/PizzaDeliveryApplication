import React, { useState, useEffect, useContext } from 'react'
import { getItemById, getItems } from './Myservices';

import { cartCount, userDetail } from '../App';
export default function Menu() {
    const [items, setItems] = useState([]);
    const { count, AddItem } = useContext(cartCount)
    const { userName, onChangeUser } = useContext(userDetail);
    useEffect(() => {
        getItems()
            .then(res => {
                if (res) {
                    setItems(res.data)
                }
            })
            .catch(err => console.log(err))
    })


    const addCart = (id) => {
        console.log(id)
        if (localStorage.getItem('mycart') != undefined) {
            let array = JSON.parse(localStorage.getItem('mycart'));
            if (array.includes(id)) {
                alert('already in cart')
            }
            else {
                array.push(id);
                localStorage.setItem('mycart', JSON.stringify(array))
                AddItem(array)
                alert('product added to cart')


            }


        }
        else {
            let array = [];
            array.push(id);
            localStorage.setItem('mycart', JSON.stringify(array));
            AddItem(array)
            alert('product added to cart')


        }
        getItemById(id)
            .then(res => {
                if (res) {
                    if (localStorage.getItem('cartDetails') != undefined) {
                        let arr = JSON.parse(localStorage.getItem('cartDetails'));
                        if (arr.some(item =>
                            item.id === id
                        )) {
                            alert('please check in the cart')
                        }
                        else {
                            arr.push(res.data);
                            localStorage.setItem('cartDetails', JSON.stringify(arr))
                            alert('product added to cart')
                        }
                    }
                    else {
                        let arr = []
                        arr.push(res.data);
                        localStorage.setItem('cartDetails', JSON.stringify(arr))
                    }
                }
            })
    }



    return (
        <div className='container'>
            <h1>Menu</h1>
            <div className='d-flex flex-wrap'>
                {items.map((item) =>
                    <div className="card" key={item.id} style={{ width: "18rem", margin: "10px", padding: "10px" }}>
                        <img src={item.url} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <button type='button' className="btn btn-primary" onClick={() => addCart(item.id)}>Add to cart</button>
                            <span className="card-text">${item.price}</span>

                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
