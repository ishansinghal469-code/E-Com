import { HomePage } from './pages/HomePage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
import { useState, useEffect } from 'react'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
import axios from 'axios'
import './App.css'




function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<Orders />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
