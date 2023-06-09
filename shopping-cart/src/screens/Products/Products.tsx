import React from "react";
import ProductCard from "../../components/ProductList/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="wrapper-products-page pt-5">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          <div className="col-span-7 h-full ">
            <Outlet />
          </div>
          <div className="col-span-5 h-full overflow-auto rounded-lg">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
