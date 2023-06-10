import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
interface counterProps {
  quantity: number;
  price: number;
  setQuantity?: Dispatch<SetStateAction<number>>;
  id: string;
}
const Counter: FC<counterProps> = ({ quantity, setQuantity, price, id }) => {
  const dispatch = useDispatch();
  let handleIncrement;
  let handleDecrement;
  if (!setQuantity) {
    handleIncrement = () => {
      dispatch(incrementQuantity(id));
    };
    handleDecrement = () => {
      dispatch(decrementQuantity(id));
    };
  } else {
    handleIncrement = () => {
      if (quantity < 99) {
        setQuantity(quantity + 1);
      }
    };
    handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between bg-gray-200 rounded-lg w-9/12 sm:w-4/12 py-2 ">
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill={quantity == 1 ? "white" : "#FF7300"}
          width={"2.5rem"}
          height={"2.5rem"}
          style={{ paddingLeft: "15px" }}
          onClick={handleDecrement}
          cursor={"pointer"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill={quantity == 1 ? "gray" : "#FF7300"}
              fillRule="evenodd"
              d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z"
            ></path>{" "}
          </g>
        </svg>
        <p className="inline-block flex-1 w-1/3 text-center"> {quantity}</p>

        <svg
          viewBox="0 0 24 24"
          fill={quantity === 99 ? "gray" : "#FF7300"}
          xmlns="http://www.w3.org/2000/svg"
          width={"2.5rem"}
          height={"2.5rem"}
          style={{ paddingRight: "15px" }}
          onClick={handleIncrement}
          cursor={"pointer"}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 12H19"
              stroke={quantity === 99 ? "gray" : "#FF7300"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 5L12 19"
              stroke={quantity === 99 ? "gray" : "#FF7300"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <p className="font-bold text-xl">${(price * quantity).toFixed(2)}</p>
    </div>
  );
};

export default Counter;
