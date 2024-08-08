import { useState } from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Products from "./customer/components/Product/Products";
import ProductCard from "./customer/components/Product/ProductCard";
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
      <Products/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
