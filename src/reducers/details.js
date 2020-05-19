//引入触发事件的名称
import {GET_AUTHOR_MESSAGE, } from '../constants/details'

//初始化数据
const initState = {
  authorItem: {}
};

//进行reduce,返回一个新的state对象
const details = (state = initState, action = {}) => {
  switch (action.type) {
    case GET_AUTHOR_MESSAGE:
      return {
        ...state,
        authorItem: action.authorItem
      }
    default:
      return state;
  }
};

export default details;