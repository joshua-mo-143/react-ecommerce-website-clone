import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Layout>
  )
}

export default App
