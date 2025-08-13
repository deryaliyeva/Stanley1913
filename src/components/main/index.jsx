import { Routes, Route } from "react-router-dom";
import Hero from "./Hero/Hero";
import CollectionSlider from "./SwiperSliders/CollectionSlider";
import Fuel from "./ProductHero/Fuel";
import Messi from "./ProductHero/Messi";
import FavoritSlider from "./SwiperSliders/FavoritSlider";
import ProductPage from "./Products/ProductPage";
import DetailsSlider from "./Products/DetailsSlider";

function Main() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CollectionSlider />
              <Fuel />
              <Messi />
              <FavoritSlider />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductPage />
              <DetailsSlider />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
