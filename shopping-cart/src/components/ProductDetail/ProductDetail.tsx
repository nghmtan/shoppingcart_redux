import React from "react";
import { useParams } from "react-router-dom";
import Counter from "../Counter/Counter";
import cart from "../../assets/images/cart.svg";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="bg-white rounded-md sticky top-10 h-[90vh] p-10">
      <div className="flex justify-center items-center my-16 ">
        <img
          src="https://cdn.bongdaplus.vn/Assets/Media/2019/12/19/70/ronaldo1.jpg"
          alt=""
          className="w-80 h-auto object-cover"
        />
      </div>
      <div>
        <div className="mb-10">
          <p className="font-semibold">True Skin Vitamin C</p>
          <p className="text-sm h-4">hello</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-8/12 items-center sm:text-center">
            <Counter />
          </div>
          <div className="bg-sky-600 px-5 flex items-center justify-center ml-0 sm:ml-5 mt-3 sm:mt-0 rounded">
            <button className="flex items-center text-white p-2">
              <img src={cart} className="w-4 h-4 inline-block" alt="Cart" />
              <p className="text-sm ml-2">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
