import React, { useContext, useEffect, useState } from 'react';
import { cartCount } from '../App';
import { orderValue } from './ProductsHeader';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const { count, AddItem } = useContext(cartCount);
    const { order, onValueChange } = useContext(orderValue);
    const items = JSON.parse(localStorage.getItem('mycart'));
    const [data, setData] = useState([]);
    let [cprice,setcprice] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('cartDetails') != undefined) {
            let dataItems = JSON.parse(localStorage.getItem('cartDetails'));
            setData(dataItems);
        }
    }, [])

    useEffect(()=>{
        if(localStorage.getItem('cartDetails') != undefined){
            let dataItems = JSON.parse(localStorage.getItem('cartDetails'));
        let x = 0; 
            dataItems.forEach(element => {
                x = x+parseFloat(element.price)
            });
            setcprice(x);
        onValueChange(x);
        }
        
    })

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
            let newArr = localArray.splice(num, 1);
            let strarr = JSON.stringify(localArray);
            localStorage.setItem("cartDetails", strarr);

           

            let localArray1 = JSON.parse(localStorage.getItem("mycart"));
            let newArr1 = localArray1.splice(num,1);
            let strarr1 = JSON.stringify(localArray1);
            localStorage.setItem("mycart",strarr1);
            AddItem(localArray1);

            let dataItems = JSON.parse(localStorage.getItem('cartDetails'));
            setData(dataItems);
        }
    }

    const checkout = ()=> {
        if(cprice === 0){
            alert("please add items to cart");
        }else{
            navigate("/login/home/order")
        }
        
    }

    return (
        <>
            <div className='container'>
                <p>
                    Total Items in cart: {count.length}
                </p>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Pizza</th>
                            
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) =>
                            <tr key={i}>
                                <td>
                                <img src={e.url} alt={e.name} width="50"/>
                                </td>
                                <td>{e.name}
                                
                                </td>
                                
                                <td>{e.price}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => delProduct(e.id)}>Remove</button>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td >
                            Total Amount: 
                            </td>
                            <td rowSpan="3">
                            
                            </td>
                            <td>
                            {cprice.toFixed(2)}
                            </td>
                            <td>
                                <button className='btn btn-secondary' onClick={checkout}>Check out </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
