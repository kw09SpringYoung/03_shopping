// product 的 reducer 使用 redux-actions简化操作
import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../action/product.action'
const initialState = []

const handleSaveProducts = (state, action) => (action.payload)
//p1: 接收函数对象  p2: 初始状态
// actionType : (state, action)=> ({xx:state.xx + action.payload})
const reducer = createReducer({
    // 保存从服务端获取的数据
    [saveProducts]:handleSaveProducts
}, initialState)
export default reducer