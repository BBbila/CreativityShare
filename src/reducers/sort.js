import {SET_HOT_SORT, SET_TIME_SORT} from '../constants/sort'
import { orderBy } from 'lodash-es';

const initState = {
  foodSoft: [],
}

const sort =(state = initState, action = {}) => {
  switch(action.type) {
    case SET_TIME_SORT:
      let sortedArr = orderBy(state.foodSoft, ['sortTime'], ['desc']);
      return {
        ...state,
        foodSoft: sortedArr
      };

      case SET_HOT_SORT:
      // 软件大小
      let sortedHotArr = orderBy(state.foodSoft, ['sortHot'], ['desc']);
      return {
        ...state,
        foodSoft: sortedHotArr
      };

      default:
      return state;
  }
}

export default sort;