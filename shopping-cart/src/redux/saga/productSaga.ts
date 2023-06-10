import { call, delay, put, takeEvery } from "redux-saga/effects";
import { Product } from "../../type/Type";
import axios from "axios";
import { getProductFailed, getProductSuccess } from "../slices/productSlice";
import { toast } from "react-toastify";
function* workGetProductsFetch(): Generator<any, any, any> {
  try {
    yield delay(3000);
    const response = yield call(
      axios.get,
      "http://localhost:4000/api/products"
    );
    const formattedProducts: Product[] = response.data;
    const images: string[] = [
      "https://muathuoctot.com/uploads/Topic/2021/11/15/muathuoctot.com_163696920140670638.jpg",
      "https://antharescosmetics.es/5551-large_default/serum-rbc-facial-factor-crecimiento-antiaging-80m.jpg",
      "https://cdn-amz.woka.io/images/I/51NFpGA4cLL.jpg",
      "https://m.media-amazon.com/images/I/61D-DoKbvYL.jpg",
      "https://my-live-01.slatic.net/p/fcf7f528692f7337d943de3a292ed83e.jpg",
    ];
    const imagedProducts: Product[] = formattedProducts.map((e, i) => {
      return {
        ...e,
        imageUrl: images[i],
      };
    });
    yield put(getProductSuccess(imagedProducts));
  } catch (error) {
    yield put(getProductFailed);
    toast.error("Couldn't fetch data. Please try again.", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    
  }
}

function* productSaga(): Generator<any, any, any> {
  yield takeEvery("products/getProducts", workGetProductsFetch);
}
export default productSaga;
