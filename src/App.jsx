import { useState } from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/pages/HomePage/Homepage'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navigation/>
    </div>
    <div>
    <Homepage/>
    </div>
    <h1>Hello Ecommerce</h1>
    </>
  )
}

export default App
