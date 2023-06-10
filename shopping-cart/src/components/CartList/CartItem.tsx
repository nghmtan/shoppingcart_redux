import React, { FC } from "react";
import { CartItemm, Product } from "../../type/Type";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import trash from "../../assets/images/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart } from "../../redux/slices/cartSlice";
const CartItem: FC<Product> = (props) => {
  const { productId, productName, price, description, imageUrl } = props;
  const cartItem: CartItemm | undefined = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.product.productId === productId)
  );

  const dispatch = useDispatch();
  const handleRemove = () => {
    console.log(productId);
    dispatch(removeFromCart(productId));
  };
  if (!cartItem) {
    // Handle the case where the product is not found
    // For example, you can display a loading state, error message, or redirect to another page
    return <div>Product not found</div>;
  }
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
        <div className="mb-24 mt-4">
          <div className="flex justify-between ">
            <Link to={`/products/${productId}`} className="font-bold">
              {productName}
            </Link>
            <img
              src={trash}
              className="h-[20px] w-[20px] cursor-pointer"
              onClick={handleRemove}
            ></img>
          </div>

          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div>
          <Counter
            quantity={cartItem.quantity}
            price={cartItem.product.price}
            id={cartItem.product.productId}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
