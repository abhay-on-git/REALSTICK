import { useState } from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Products from "./customer/components/Product/Products";
import ProductCard from "./customer/components/Product/ProductCard";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouter from "./Routers/CustomerRouter";
function App() {
  const [count, setCount] = useState(0);

  return (

    <>
    <Routes>
      <Route path="/*" element={<CustomerRouter />} />
    </Routes>
       
     
    </>
  );
}

export default App;
