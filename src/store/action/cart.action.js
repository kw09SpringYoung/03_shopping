import { createAction } from 'redux-actions'

// 点击将加入购物车的商品发送到服务端
export const addProductToCart = createAction('addProductToCart ')

// 本地将商品添加进购物车
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 从服务端获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 将购物车列表数据添加到本地购物处列表
export const saveCarts = createAction('saveCarts')

// 向服务器发送请求，告诉服务器要删除的商品
export const deleteProductFromCart = createAction('deleteProductFromCart')
// 根据服务器返回的数据，删除本地商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 向服务端发送请求，告诉服务端哪一个商品的数量发生更改
export const changServiceProductNumber = createAction('changServiceProductNumber')

// 根据服务端返回的数据，更改本地商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')