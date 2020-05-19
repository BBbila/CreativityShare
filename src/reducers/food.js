import { GET_FOOD_LIST, INCREMENT_FOOD_LOVENUMS} from '../constants/food'

const initState = {
  foodList: [],
}

const food = (state = initState, action = {}) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state, 
        foodList: action.list
      }
    case INCREMENT_FOOD_LOVENUMS:
      const index = action.index
      //console.log("111222",state)
      return {
        ...state,
        foodList:[
          ...state.foodList.slice(0,index),//在更新前
          {...state.foodList[index], loveNum: state.foodList[index].loveNum + 1},
          ...state.foodList.slice(index+1),//更新后
        ]
      }
    default:
      return state;
  }
}

export default food;