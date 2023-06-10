import React from "react";
import { CartItemm, Product } from "../../type/Type";
import CartItem from "./CartItem";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
const CardList = () => {
  const productList: CartItemm[] = useSelector(
    (state: RootState) => state.cart.items
  );
  console.log(productList);
  const dispatch = useDispatch();
  const images: string[] = [
    "https://znews-photo.zingcdn.me/w660/Uploaded/neg_etpyole/2023_06_04/2023_06_03T192929Z_1465924169_UP1EJ631I530A_RTRMADP_3_SOCCER_FRANCE_PSG_CLE_REPORT_1_.JPG",
    "https://cdn.bongdaplus.vn/Assets/Media/2019/12/19/70/ronaldo1.jpg",
  ];
  return (
    <div>
      {productList.map((item, i) => (
        <CartItem
          key={i}
          productName={item.product.productName}
          productId={item.product.productId}
          description={item.product.description}
          imageUrl={item.product.imageUrl}
          price={item.product.price}
        />
      ))}
    </div>
  );
};

export default CardList;
