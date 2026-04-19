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

  const loadCart = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cart-items?expand=product")
      setCart(response.data)
    } catch (error) {
      console.error("Error loading cart:", error)
    }
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<Orders cart={cart} loadCart={loadCart} />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App

