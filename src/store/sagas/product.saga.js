// 使用 redux-saga 进行 action (product) 的异步操作
import {takeEvery, put} from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../action/product.action'
import axios from 'axios'
function* loadProducts_fn () {
    // 向服务端发送数据(查看接口文档，shoppingCartService 下的 readme.md文档)
    const { data } = yield axios.get('http://localhost:3005/goods')
  
    // 触发 saveProducts action保存数据
    yield put(saveProducts(data))
}

export default function* () {
    // 获取 loadProducts action，调用自定义的方法
    // product 向服务端发送数据
    yield takeEvery(loadProducts,loadProducts_fn )
}