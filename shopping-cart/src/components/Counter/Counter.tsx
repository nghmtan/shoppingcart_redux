import React from "react";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";

const Counter = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between bg-gray-200 rounded-lg w-9/12 sm:w-4/12 py-2 ">
        <img
          src={minus}
          className="flex-1 inline-block w-1/3 h-[1.2rem] cursor-pointer px-3"
          alt="Minus"
        />
        <p className="inline-block flex-1 w-1/3 text-center"> 2</p>
        <img
          src={plus}
          className="inline-block flex-1 w-1/3 h-[1.2rem] cursor-pointer px-3"
          alt="Plus"
        />
      </div>
      <p className="font-bold">$23.99</p>
    </div>
  );
};

export default Counter;
