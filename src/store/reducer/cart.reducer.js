import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCarts } from '../action/cart.action'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const product = newState.find(product => product.id == action.payload.id)
    if(product) {
        // 购物车中有该产品了
        product.count = Number(product.count) + 1
    } else {
        // 列表中还没有该产品
        newState.push(action.payload)
    }
    return newState
}
const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromLocalCart = (state, action) => {
    // 深拷贝state
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.payload.id, 1)
    return newState
}

const handleChangeLocalProductNumber = (state, action) => {
    // 深拷贝state
    const newState = JSON.parse(JSON.stringify(state))
    const product = newState.find(product => product.id === action.payload.id)
    product.count = action.payload.count
    return newState
}

export default createReducer({
    // 将商品添加到本地购物车
    [addProductToLocalCart]: handleAddProductToLocalCart,
    // 将服务器端数据添加到本地购物车列表
    [saveCarts]: handleSaveCarts,
    // 根据服务器返回的数据，删除本地商品
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    // 根据服务端返回的数据，更改本地商品数量
    [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)