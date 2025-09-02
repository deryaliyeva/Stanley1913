import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ProductPage from './components/main/Products/ProductPage';
import CategoryPage from "./components/main/Category/CategoryPage";
import SignIn from './components/login/SignIn';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/*" element={<Main cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductPage cart={cart} setCart={setCart} />} />
        <Route path="/category/:mainSlug/:subSlug" element={<CategoryPage cart={cart} setCart={setCart} />} />
        <Route path="/category/:mainSlug" element={<CategoryPage cart={cart} setCart={setCart} />} />
        <Route path="/signin" element={<SignIn />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
