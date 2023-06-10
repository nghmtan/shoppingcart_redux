import React, { useEffect } from "react";
import ProductCard from "../../components/ProductList/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getProducts } from "../../redux/slices/productSlice";
import { Product } from "../../type/Type";

const Products = () => {
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const productList: Product[] = useSelector(
    (state: RootState) => state.products.products
  );
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productList.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch]);
  return (
    <div>
      <div className={`overlay ${isLoading ? "show" : ""}`} />
      {isLoading ? (
        <div>
          <div className="absolute translate-x-[-50%]] translate-y-[-50%] top-1/2 left-1/2 right-1/2 m-0 ">
            <div className="containerr">
              <div className="spinner">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>

            <svg>
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
                                                           1 0 0 0 0 
                                                           0 1 0 0 0
                                                           0 0 1 0 0
                                                           0 0 0 50 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      ) : (
        <div className="wrapper-products-page pt-5">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-12 h-full gap-5">
              <div className="col-span-7 h-full ">
                {id ? (
                  <Outlet />
                ) : (
                  <div className="h-[80vh] flex justify-center items-center">
                    {" "}
                    <p className="text-center font-bold text-xl ">
                      Please Select an product
                    </p>
                  </div>
                )}
              </div>
              <div className="col-span-5 h-full overflow-auto rounded-lg">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
