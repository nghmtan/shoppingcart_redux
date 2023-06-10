import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../Counter/Counter";
import cartt from "../../assets/images/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { Product } from "../../type/Type";
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(1);
  }, [id]);

  const dispatch = useDispatch();
  const product: Product | undefined = useSelector((state: RootState) =>
    state.products.products.find((productt) => productt.productId === id)
  );
  if (!product) {
    // Handle the case where the product is not found
    // For example, you can display a loading state, error message, or redirect to another page
    return <div>Product not found</div>;
  }
  const showToastMessage = () => {
    toast.success("👏👏👏 Added successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-message",
      progressClassName: "progress-bar",
    });
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ product: product, quantity: quantity }));
    showToastMessage();
  };
  return (
    <div className="bg-white rounded-md sticky top-10 h-[90vh] p-10">
      <div className="flex justify-center items-center my-16 h-1/2 ">
        <img
          src={product.imageUrl}
          alt=""
          className="w-80 h-auto object-cover"
        />
      </div>
      <div>
        <div className="mb-20">
          <p className="font-semibold text-3xl">{product.productName}</p>
          <p className="text-sm h-4 text-gray-500 text-lg">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-8/12 items-center sm:text-center">
            <Counter
              quantity={quantity}
              setQuantity={setQuantity}
              price={product.price}
              id={product.productId}
            />
          </div>
          <div className="bg-sky-600 px-5 flex items-center justify-center ml-0 sm:ml-5 mt-3 sm:mt-0 rounded">
            <button
              className="flex items-center text-white p-2"
              onClick={handleAddToCart}
            >
              <img src={cartt} className="w-4 h-4 inline-block" alt="Cart" />
              <p className="text-sm ml-2">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
