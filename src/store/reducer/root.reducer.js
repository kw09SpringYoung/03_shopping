import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import cartReducer from './cart.reducer'
//合并reducer， 参数：对象，必写至少一个reducer
// {products: []}
export default combineReducers({
    products: productReducer,
    carts: cartReducer
})