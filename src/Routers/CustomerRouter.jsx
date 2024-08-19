import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/pages/HomePage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Products from '../customer/components/Product/Products'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouter = () => {
  return (
    <div>
         <Navigation />
        <Routes>
        <Route path="/login" element={<Homepage />} />
        <Route path="/signup" element={<Homepage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:levelOne/:levelTwo/:levelThree" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/order" element={<Order />} />
            <Route path="/account/order/:orderId" element={<OrderDetails />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default CustomerRouter