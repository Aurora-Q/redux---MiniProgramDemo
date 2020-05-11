import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from '../lib/redux';
// logger:logger是输出日志的
import logger from '../lib/redux-logger';
import { indexReducer } from 'index/index.redux';
import { detailReducer } from 'detail/detail.redux'
// 引入thunk中间件
import thunk from '../lib/redux-thunk';
// 原本想在这里引入saga的，没有想到怎么将样板代码action拆开来与saga组合，难受
// import createSagaMiddleware from 'redux-saga'

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({
    indexReducer,
    detailReducer, //每新建一个redux层的时候，记得将它与store层联系起来哦
}), compose(applyMiddleware(thunk, logger)));