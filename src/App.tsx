import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import Login from './pages/Login'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<>...</>}>
          <Home/>
        </React.Suspense>}/>
        <Route path="/products" element={<React.Suspense fallback={<>...</>}>
        <ProductsPage/>
        </React.Suspense>}/>
        <Route path="/products/:id" element={<React.Suspense fallback={<>...</>}>
        <ProductPage/>
        </React.Suspense>}/>
        <Route path="/cart" element={<React.Suspense fallback={<>...</>}>
        <CartPage/>
        </React.Suspense>}/>
        <Route path="/wishlist" element={<React.Suspense fallback={<>...</>}>
        <WishlistPage/>
        </React.Suspense>}/>
        <Route path="/login" element={<React.Suspense fallback={<>...</>}>
        <Login/>
        </React.Suspense>}/>
      </Routes>
    </Layout>
  )
}

export default App
