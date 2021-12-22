// 创建products 的 actions

// 我们使用 redux-actions 中间件 简化action代码
import { createAction } from 'redux-actions'

// export const xxxAction = createAction('描述文字') 返回的是对象，这里不处理函数
//  错误示范： export const xxxAction = ()=> createAction('描述文字') 不能是函数 ***

// 向服务端发送数据的action (异步操作， 使用 redux-saga中间件 )

export const loadProducts = createAction('load products')

// 保存从服务端接收的数据
export const saveProducts = createAction('save products')