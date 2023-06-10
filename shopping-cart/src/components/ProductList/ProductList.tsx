import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../type/Type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import { RootState } from "../../redux/store";
const ProductList = () => {
  const productList: Product[] = useSelector(
    (state: RootState) => state.products.products
  );

  return (
    <div className="grid grids-col-12 gap-3 h-auto overflow-auto">
      {productList.map((product, i) => (
        <ProductCard
          key={i}
          productName={product.productName}
          productId={product.productId}
          description={product.description}
          imageUrl={product.imageUrl}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
