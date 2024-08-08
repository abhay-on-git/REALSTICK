import { useState } from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Homepage />
      </div>
      <Footer/>
    </>
  );
}

export default App;
