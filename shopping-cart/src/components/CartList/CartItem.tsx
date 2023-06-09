import React, { FC } from "react";
import { Product } from "../../type/Type";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import trash from "../../assets/images/trash.svg";
const CartItem: FC<Product> = (props) => {
  const { productId, productName, price, description, imageUrl } = props;
  return (
    <div className="flex rounded-lg p-4 gap-3 bg-[white] shadow-lg mb-5">
      <div className="w-1/3 p-1">
        <img
          className="w-full rounded-lg h-full object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className=" w-2/3  px-4">
        <div className="mb-5">
          <div className="flex justify-between ">
            <Link to={`/products/${productId}`} className="font-bold">
              {productName}
            </Link>
            <img src={trash} className="h-[16px] w-[16px] cursor-pointer"></img>
          </div>

          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
