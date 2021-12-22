import { all } from 'redux-saga/effects'
import productSaga from "./product.saga";
import cartSaga from './cart.saga';

// 传入所有的saga
// 暴露rootSaga
export default function* rootSaga (){
    yield all([
        productSaga(),
        cartSaga()
    ])
} 