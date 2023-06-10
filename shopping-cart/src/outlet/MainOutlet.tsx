import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

import { RootState } from "../redux/store";
import { CartItemm } from "../type/Type";
import { ToastContainer } from "react-toastify";
import { getProducts } from "../redux/slices/productSlice";

const MainOutlet = () => {
  const cartList: CartItemm[] = useSelector(
    (state: RootState) => state.cart.items
  );
  return (
    <div>
      <div className="bg-white shadow-md px-5 ">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8 w-1/3">
              <NavLink
                className=" text-gray-500 hover:text-black inline-block text-lg font-normal relative "
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className=" text-gray-500 hover:text-black inline-block text-lg font-normal relative "
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className=" text-gray-500 hover:text-black inline-block text-lg font-normal relative  "
                to="/reviews"
                aria-current="page"
              >
                Reviews
              </NavLink>
            </div>
            <div className="w-1/3">
              <h2 className="text-2xl text-blue-500 font-bold text-center">
                Beauty.bd
              </h2>
            </div>
            <Link className="w-1/3" to="/checkout">
              <div className="flex items-center justify-end relative">
                <div className="rounded-full flex items-center justify-center text-2xl w-10 h-10 text-blue-500 cursor-pointer">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shopping-cart"
                    className="svg-inline--fa fa-shopping-cart fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                    ></path>
                  </svg>
                </div>
                {cartList.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-[#EF4444] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    {cartList.length}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainOutlet;
