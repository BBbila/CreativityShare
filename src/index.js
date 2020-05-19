import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import './index.css';
import rootReducer from './reducers';
import App from './App';
import thunk from 'redux-thunk' // redux 作者开发的异步处理方案 可以在action 里传入 dispatch getState
import createLogger from 'redux-logger' // 利用redux-logger打印日志


// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger;

// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];

//创建store
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

