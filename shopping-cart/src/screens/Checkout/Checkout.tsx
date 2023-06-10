import React from "react";
import { Link } from "react-router-dom";
import CardList from "../../components/CartList/CardList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItemm } from "../../type/Type";

const Checkout = () => {
  const shippingCost = 10;
  const cartList: CartItemm[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const subTotal = cartList.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);
  return (
    <div>
      <div
        className="rounded-lg mx-auto overflow-hidden bg-transparent container xl:px-48"
        style={{ height: "auto" }}
      >
        <div className="grid lg:grid-cols-12 pt-5 gap-4 h-full auto-rows-min">
          <div className="lg:col-span-12">
            <div className="p-3 bg-white shadow-lg w-full rounded-lg">
              <div className="w-full text-center font-semibold">
                My Shopping Cart
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 overflow-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="grid girds-col-12 gap-4 w-full h-full rounded-lg overflow-auto">
                  {/* <h4 className="text-center mt-12 font-bold text-xl">
                    You have no products in cart
                  </h4> */}
                  <CardList />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 ">
            <div className="grid grid-cols-12 gap-4  ">
              <div className="col-span-12 ">
                <div className="bg-gray-100 px-4 py-2 grid gap-1 gird-cols-12 w-full rounded-lg h-44 ">
                  <div className="col-span-12  ">
                    <h6 className="text-lg font-medium">Order Info</h6>
                  </div>
                  <div className="col-span-12 text-lg">
                    <div className="flex items-center justify-between">
                      <p className="font-light text-gray-700">Subtotal:</p>
                      <p className="font-normal">${subTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-light text-gray-700">Shipping Cost:</p>
                      <p className="font-normal">
                        ${subTotal > 0 ? shippingCost : 0}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex items-center justify-between font-semibold text-3xl">
                      <p className="">Total:</p>
                      <p className="">
                        $
                        {subTotal > 0
                          ? (subTotal + shippingCost).toFixed(2)
                          : 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <button
                  className={`flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-blue-500 text-white ${
      subTotal <= 0
        ? `opacity-50 cursor-not-allowed disabled}`
        : "opacity-100 hover:bg-blue-400"
    }    w-full`}
                >
                  Checkout
                </button>
              </div>
              <Link to="/products" className="col-span-12">
                <button
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-blue-500 text-blue-500 hover:bg-blue-200 false w-full"
                >
                  Continue shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
