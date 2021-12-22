import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/root.reducer'

// 引用saga
import createSagaMiddleware from 'redux-saga'

// 引入rootSaga
import rootSaga from './sagas/root.saga'

// 调用createSagaMiddleware方法，创建中间件
const sagaMiddleware = createSagaMiddleware()

// 创建store (必写参数 Reducer)
// 使用 applyMiddleware方法注册中间件（所注册的中间件按顺序执行）
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// 运行 
sagaMiddleware.run(rootSaga)