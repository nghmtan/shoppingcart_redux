import React, { FC } from "react";
import { Product } from "../../type/Type";
import { Link } from "react-router-dom";
const ProductCard: FC<Product> = (props) => {
  const { productId, productName, price, description, imageUrl } = props;
  return (
    <div className="flex rounded-lg p-4 gap-3 bg-[white] shadow-lg">
      <div className="w-1/3 p-1">
        <img
          className="w-full rounded-lg h-full object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className=" w-2/3  px-4">
        <div className="mb-20 mt-11">
          <Link to={`/products/${productId}`} className="font-bold">
            {productName}
          </Link>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-bold">${price}</p>
            <Link
              to={`/products/${productId}`}
              className="text-sm text-cyan-600"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
