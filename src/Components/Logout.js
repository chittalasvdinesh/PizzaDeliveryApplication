import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartCount } from '../App';

export default function Logout() {
    const { AddItem } = useContext(cartCount)
  
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear()
        navigate('/')
        AddItem([])

    })
}
