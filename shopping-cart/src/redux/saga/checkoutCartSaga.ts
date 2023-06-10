import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  purchaseFailed,
  purchaseRequest,
  purchaseSuccess,
} from "../slices/cartSlice";
import { RequestBody } from "../../type/Type";
import { toast } from "react-toastify";

function* checkoutWorker(action: any): Generator<any, any, any> {
  const showToastMessage = () => {
    toast.success("👏👏👏 Thanks you for purchased!!!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "toast-message",
      progressClassName: "progress-bar",
    });
  };
  try {
    yield delay(2000);
    const { paySuccess, productsInOrder } = action.payload;
    // Make the API request
    const response = yield call(
      axios.post,
      "http://localhost:4000/api/checkout",
      {
        paySuccess,
        productsInOrder,
      }
    );
    showToastMessage();
    // Dispatch a success action with the response payload
    yield put(purchaseSuccess(response.data));
  } catch (error) {
    yield put(purchaseFailed());
    toast.error("Couldn't purchase. Please try again.", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }
}

export function* checkoutSaga() {
  yield takeLatest(purchaseRequest, checkoutWorker);
}
