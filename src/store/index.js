import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 使用devtools 括号中表示可选参数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
// composeEnhancers会合并中间件
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
