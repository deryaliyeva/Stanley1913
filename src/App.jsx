import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ProductPage from './components/main/Products/ProductPage';

function App() {
  const [cart, setCart] = useState([]); 

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Main cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductPage cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
