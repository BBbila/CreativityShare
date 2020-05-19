import {LOGIN_TEST, LOGIN_OUT} from '../constants/login';

const initState = {
  isLogin: false,
  item:{},
  index:0,
};

//进行reduce,返回一个新的state对象
const login = (state = initState, action = {}) => {
  switch (action.type) {
    case LOGIN_TEST:
      return { 
        ...state,
        isLogin: action.isLogin,
        item: action.item,
        index: action.index
      };
    case LOGIN_OUT:
      return { 
        ...state,
        isLogin: action.isLogin,
        item: action.item
      };
    default:
      return state;
  }
};

export default login;