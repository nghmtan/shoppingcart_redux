import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import MainOutlet from "./outlet/MainOutlet";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./screens/Home";
import Review from "./screens/Review";
import Products from "./screens/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from "./screens/Checkout/Checkout";

function App() {
  const a = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetail />}></Route>
        </Route>
        <Route path="reviews" element={<Review />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
