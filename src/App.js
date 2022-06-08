import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Menu from './Components/Menu';
import Order from './Components/Order';
import ProductsHeader from './Components/ProductsHeader';
import Signup from './Components/Signup';
import Success from './Components/Success';
import {createContext, useEffect, useState} from'react';
import Notfound from './Components/Notfound';

export const cartCount=createContext()
export const userDetail=createContext()
function App() {
  const[count,setCount]=useState([])
  const [username,setuserName]=useState([])

  const AddItem=(data)=>{
    setCount(data)
  }

  const onChangeUser = (uname) =>{
    setuserName(uname);
  }

  useEffect(()=>{
    if(localStorage.getItem('mycart')!=undefined){
      let array=JSON.parse(localStorage.getItem('mycart'));
      setCount(array)
    }
  },[])
  return (
    <>
    <cartCount.Provider value={{count,AddItem}}>
      <userDetail.Provider value={{username,onChangeUser}}>
    <Router>
      
      <section>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login/home' element={<ProductsHeader/>}>
            <Route path='menu' element={<Menu/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='logout' element={<Logout/>}/>
            <Route path='order' element={<Order/>}/>
            <Route path='success' element={<Success/>}/>
          </Route>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </section>
    </Router>
    </userDetail.Provider>
    </cartCount.Provider>
    </>
  );
}

export default App;
