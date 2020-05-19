import {DELETE_POSTS } from '../constants/mine'

const initState = {
  mineList: [],
  afterDeleteList:[]
};

//进行reduce,返回一个新的state对象
const mine = (state = initState, action = {}) => {
  switch (action.type) {
    case DELETE_POSTS:
      const i = action.i
      return { 
        ...state,
        mineList:action.list,
        afterDeleteList: action.list.splice(i,1)
      };
    default:
      return state;
  }
};

export default mine;