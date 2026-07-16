import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CheckoutPage from './pages/CheckoutPage'
import { CartProvider } from './cart-context'

function App() {

  return (
    <CartProvider>
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop' element={<ProductsPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
    </CartProvider>
  )


}

export default App
