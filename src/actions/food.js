import { GET_FOOD_LIST, INCREMENT_FOOD_LOVENUMS } from '../constants/food'
import axios from 'axios'

export const getFoodList = (list) => {
  return {
    type: GET_FOOD_LIST,
    list
  }
}

export const incrementFoodLoveNums = (index) =>{
  return {
    type: INCREMENT_FOOD_LOVENUMS,
    index
  }
}

export const getFoodListMsg = () => {
  return (dispatch) =>{
    axios.get('../../api/details.json').then((res) => {
      const result = res.data.data.foodList
      //console.log("foodList",result)
      dispatch(getFoodList(result))
    }).catch(() => {
    })
  }
}