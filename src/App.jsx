import { useState } from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Products from "./customer/components/Product/Products";
import ProductCard from "./customer/components/Product/ProductCard";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <Homepage /> */}
      </div>
      <div>
      {/* <Products/> */}
      </div>
      <div>
        {/* <ProductDetails/> */}
      </div>
      <div>
        {/* <Cart/> */}
      </div>
      <div>
        <Checkout/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
