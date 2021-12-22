import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import {
  addProductToCart,
  addProductToLocalCart,
  changeLocalProductNumber,
  changServiceProductNumber,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  loadCarts,
  saveCarts,
} from "../action/cart.action";

//点击购物，发送id 到服务端；向服务端获取商品数据
function* handleAddProductToCart(action) {
  console.log(action.payload);
  const { data } = yield axios.post("http://localhost:3005/cart/add", {
    gid: action.payload,
  });
  // 将商品添加到本地购物车
  yield put(addProductToLocalCart(data));
}

// 向服务端请求购物车列表数据
function* handleLoadCarts() {
  const { data } = yield axios.get("http://localhost:3005/cart");

  // 将服务器端数据添加到本地购物车列表
  yield put(saveCarts(data));
}

// 向服务器发送请求，告诉服务器要删除的商品
function* handleDeleteProductFromCart(action) {
    const { data } = yield axios.delete('http://localhost:3005/cart/delete', { params:{cid:action.payload}})
    data.id = action.payload
    console.log(data)
    yield put(deleteProductFromLocalCart(data))
}

 // 向服务端发送请求，告诉服务端哪一个商品的数量发生更改
function* handleChangServiceProductNumber (action) {
    const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
    // 根据服务端返回的数据，更改本地商品数量
    yield put(changeLocalProductNumber(data))
}

export default function* cartSaga() {
  //点击购物，发送id 到服务端；向服务端获取商品数据
  yield takeEvery(addProductToCart, handleAddProductToCart);

  // 向服务端请求购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts);

  // 向服务器发送请求，告诉服务器要删除的商品
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart);

  // 向服务端发送请求，告诉服务端哪一个商品的数量发生更改
  yield takeEvery(changServiceProductNumber, handleChangServiceProductNumber)
}
