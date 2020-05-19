import {
  INCREMET_LOVENUMS,
  INCREMET_FOOD_LOVENUMS,
  INCREMET_DRINK_LOVENUMS,
  INCREMET_BLING_LOVENUMS,
  INCREMET_CLEAN_LOVENUMS,
  INCREMET_SECURITY_LOVENUMS,
  GET_LIST, 
  ADD_MORE_TREASURE_LIST,
  ADD_MORE_BLING_LIST,
  ADD_MORE_FOOD_LIST,
  ADD_MORE_CLEAN_LIST,
  ADD_MORE_DRINK_LIST,
  ADD_MORE_SECURITY_LIST
} from '../constants/listRender'
import axios from 'axios'

export const incrementLoveNums = (index) => {
  return  {
    type: INCREMET_LOVENUMS,
    index,
  }
}
export const incrementFoodLoveNums = (foodIndex) => {
  return  {
    type: INCREMET_FOOD_LOVENUMS,
    foodIndex,
  }
}
export const incrementDrinkLoveNums = (drinkIndex) => {
  return  {
    type: INCREMET_DRINK_LOVENUMS,
    drinkIndex,
  }
}
export const incrementBlingLoveNums = (blingIndex) => {
  return  {
    type: INCREMET_BLING_LOVENUMS,
    blingIndex,
  }
}
export const incrementCleanLoveNums = (cleanIndex) => {
  return  {
    type: INCREMET_CLEAN_LOVENUMS,
    cleanIndex,
  }
}
export const incrementSecurityLoveNums = (securityIndex) => {
  return  {
    type: INCREMET_SECURITY_LOVENUMS,
    securityIndex,
  }
}

export const addMoreTreasureList = (list,nextpage) => {
  return  {
    type: ADD_MORE_TREASURE_LIST,
    list,
    nextpage
  }
}
export const addMoreDrinkList = (list,nextpage) => {
  return  {
    type: ADD_MORE_DRINK_LIST,
    list,
    nextpage
  }
}
export const addMoreFoodList = (list,nextpage) => {
  return  {
    type: ADD_MORE_FOOD_LIST,
    list,
    nextpage
  }
}
export const addMoreBlingList = (list,nextpage) => {
  return  {
    type: ADD_MORE_BLING_LIST,
    list,
    nextpage
  }
}
export const addMoreCleanList = (list,nextpage) => {
  return  {
    type: ADD_MORE_CLEAN_LIST,
    list,
    nextpage
  }
}
export const addMoreSecurityList = (list,nextpage) => {
  return  {
    type: ADD_MORE_SECURITY_LIST,
    list,
    nextpage
  }
}


export const addMoreTreasureListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/treasureList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreTreasureList(result, page+1))
    }).catch(() => {
    })
  }
}

export const addMoreDrinkListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/drinkList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreDrinkList(result, page+1))
    }).catch(() => {
    })
  }
}

export const addMoreFoodListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/foodList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreFoodList(result, page+1))
    }).catch(() => {
    })
  }
}
export const addMoreBlingListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/blingList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreBlingList(result, page+1))
    }).catch(() => {
    })
  }
}
export const addMoreCleanListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/cleanList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreCleanList(result, page+1))
    }).catch(() => {
    })
  }
}
export const addMoreSecurityListMsg = (page) => {
  return (dispatch) =>{
    axios.get('../../api/securityList.json?page='+ page).then((res) => {
      const result = res.data.data
      dispatch(addMoreSecurityList(result, page+1))
    }).catch(() => {
    })
  }
}



export const getList = (obj) => {
  return  {
    type: GET_LIST,
    obj
  }
}

export const getListMsg = () => {
  return (dispatch) =>{
    axios.get('../../api/details.json').then((res) => {
      const result = res.data.data
      dispatch(getList(result))
    }).catch(() => {
    })
  }
}

