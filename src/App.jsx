import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ProductPage from './components/main/Products/ProductPage';
import CategoryPage from "./components/main/Category/CategoryPage";
import SignIn from './components/login/SignIn';
import HeroShop from "./components/main/Hero/HeroShop";
import HeroShopSlider from "./components/main/Hero/HeroShopSlider";
import FuelShop from "./components/main/ProductHero/FuelShop";
import LifestyleTiles from "./components/main/ProductHero/LifeStyleTiles";
import FuelFaq from "./components/main/ProductHero/FuelFaq";
import MessiShop from "./components/main/ProductHero/MessiShop";
import MessiVideoPlayer from "./components/main/ProductHero/MessiVideoPlayer";
import MessiShopSlider from "./components/main/ProductHero/MessiShopSlider";
import Profile from "./components/login/Profile";

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
        <Route path="/hero-shop" element={<HeroShop />} />
        <Route path="/hero-shop-slider" element={<HeroShopSlider />} />
        <Route path="/fuel-shop" element={<FuelShop />} />
        <Route path="/life-style-shop" element={<LifestyleTiles />} />
        <Route path="/fuel-faq" element={<FuelFaq />} />
        <Route path="/messi-shop" element={<MessiShop />} />
        <Route path="/messi-video" element={<MessiVideoPlayer />} />
        <Route path="/messi-slider" element={<MessiShopSlider />} />
        <Route path="/product/:id" element={<ProductPage cart={cart} setCart={setCart} />} />
        <Route path="/category/:mainSlug/:subSlug" element={<CategoryPage cart={cart} setCart={setCart} />} />
        <Route path="/category/:mainSlug" element={<CategoryPage cart={cart} setCart={setCart} />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Main cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
