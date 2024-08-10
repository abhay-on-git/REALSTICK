import { useState } from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Products from "./customer/components/Product/Products";
import ProductCard from "./customer/components/Product/ProductCard";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
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
        <ProductDetails/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
