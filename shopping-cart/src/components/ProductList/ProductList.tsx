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
  console.log(productList);
  const images: string[] = [
    "https://muathuoctot.com/uploads/Topic/2021/11/15/muathuoctot.com_163696920140670638.jpg",
    "https://antharescosmetics.es/5551-large_default/serum-rbc-facial-factor-crecimiento-antiaging-80m.jpg",
    "https://cdn-amz.woka.io/images/I/51NFpGA4cLL.jpg",
    "https://m.media-amazon.com/images/I/61D-DoKbvYL.jpg",
    "https://my-live-01.slatic.net/p/fcf7f528692f7337d943de3a292ed83e.jpg",
  ];

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
