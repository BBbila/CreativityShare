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
  ADD_MORE_CLEAN_LIST,
  ADD_MORE_FOOD_LIST,
  ADD_MORE_DRINK_LIST,
  ADD_MORE_SECURITY_LIST
} from '../constants/listRender'

const initState = {
  renderList: {},
  trePage: 1,
  drPage:1,
  blPage:1,
  sePage:1,
  clPage:1,
  foPage:1,
}

const listRender = (state = initState, action = {}) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state, 
        renderList: action.obj
      }
    case ADD_MORE_TREASURE_LIST:
      return {
        ...state, 
        renderList:{
          foodList:[...state.renderList.foodList],
          drinkList:[...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          treasureList: state.renderList.treasureList.concat(action.list)
        },
        trePage: action.nextpage
      }
    case ADD_MORE_DRINK_LIST:
      return {
        ...state, 
        renderList:{
          foodList:[...state.renderList.foodList],
          treasureList: [...state.renderList.treasureList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          drinkList: state.renderList.drinkList.concat(action.list)
        },
        drPage: action.nextpage
      }
    case ADD_MORE_FOOD_LIST:
      return {
        ...state, 
        renderList:{
          treasureList: [...state.renderList.treasureList],
          drinkList: [...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          foodList:state.renderList.foodList.concat(action.list)
        },
        foPage: action.nextpage
      }
    case ADD_MORE_BLING_LIST:
      return {
        ...state, 
        renderList:{
          treasureList: [...state.renderList.treasureList],
          drinkList: [...state.renderList.drinkList],
          foodList:[...state.renderList.foodList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          blingList:state.renderList.blingList.concat(action.list)
        },
        blPage: action.nextpage
      }
      case ADD_MORE_CLEAN_LIST:
        return {
          ...state, 
          renderList:{
            treasureList: [...state.renderList.treasureList],
            drinkList: [...state.renderList.drinkList],
            foodList:[...state.renderList.foodList],
            blingList:[...state.renderList.blingList],
            securityList:[...state.renderList.securityList],
            cleanList:state.renderList.cleanList.concat(action.list)
           
          },
          clPage: action.nextpage
        }
      case ADD_MORE_SECURITY_LIST:
        return {
          ...state, 
          renderList:{
            treasureList: [...state.renderList.treasureList],
            drinkList: [...state.renderList.drinkList],
            foodList:[...state.renderList.foodList],
            blingList:[...state.renderList.blingList],
            cleanList:[...state.renderList.cleanList],
            securityList:state.renderList.securityList.concat(action.list)
          },
          clPage: action.nextpage
        }


    case INCREMET_LOVENUMS:
      const index = action.index
      return {
        ...state,
        renderList:{
          foodList:[...state.renderList.foodList],
          drinkList:[...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          treasureList:
          [...state.renderList.treasureList.slice(0,index),//在更新前
           {...state.renderList.treasureList[index], loveNum: state.renderList.treasureList[index].loveNum + 1},
           ...state.renderList.treasureList.slice(index+1),//更新后
         ]
        }
      }
    case INCREMET_FOOD_LOVENUMS:
      const foodIndex = action.foodIndex
      return {
        ...state,
        renderList:{
          treasureList:[...state.renderList.treasureList],
          drinkList:[...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          foodList:[...state.renderList.foodList.slice(0,foodIndex),//在更新前
            {...state.renderList.foodList[foodIndex], loveNum: state.renderList.foodList[foodIndex].loveNum + 1},
            ...state.renderList.foodList.slice(foodIndex+1),//更新后
          ]
        }
      }
    case INCREMET_DRINK_LOVENUMS:
      const drinkIndex = action.drinkIndex
      return {
        ...state,
        renderList:{
          treasureList:[...state.renderList.treasureList],
          foodList:[...state.renderList.foodList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          drinkList:[...state.renderList.drinkList.slice(0,drinkIndex),//在更新前
            {...state.renderList.drinkList[drinkIndex], loveNum: state.renderList.drinkList[drinkIndex].loveNum + 1},
            ...state.renderList.drinkList.slice(drinkIndex+1),//更新后
          ]
        }
      }
    case INCREMET_BLING_LOVENUMS:
      const blingIndex = action.blingIndex
      return {
        ...state,
        renderList:{
          treasureList:[...state.renderList.treasureList],
          foodList:[...state.renderList.foodList],
          drinkList:[...state.renderList.drinkList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList],
          blingList:[...state.renderList.blingList.slice(0,blingIndex),//在更新前
            {...state.renderList.blingList[blingIndex], loveNum: state.renderList.blingList[blingIndex].loveNum + 1},
            ...state.renderList.blingList.slice(blingIndex+1),//更新后
          ]
        }
      }
    case INCREMET_CLEAN_LOVENUMS:
      const cleanIndex = action.cleanIndex
      return {
        ...state,
        renderList:{
          treasureList:[...state.renderList.treasureList],
          foodList:[...state.renderList.foodList],
          drinkList:[...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          securityList:[...state.renderList.securityList],
          cleanList:[...state.renderList.cleanList.slice(0,cleanIndex),//在更新前
            {...state.renderList.cleanList[cleanIndex], loveNum: state.renderList.cleanList[cleanIndex].loveNum + 1},
            ...state.renderList.cleanList.slice(cleanIndex+1),//更新后
          ]
        }
      }
    case INCREMET_SECURITY_LOVENUMS:
      const securityIndex = action.securityIndex
      return {
        ...state,
        renderList:{
          treasureList:[...state.renderList.treasureList],
          foodList:[...state.renderList.foodList],
          drinkList:[...state.renderList.drinkList],
          blingList:[...state.renderList.blingList],
          cleanList:[...state.renderList.cleanList],
          securityList:[...state.renderList.securityList.slice(0,securityIndex),//在更新前
            {...state.renderList.securityList[securityIndex], loveNum: state.renderList.securityList[securityIndex].loveNum + 1},
            ...state.renderList.securityList.slice(securityIndex+1),//更新后
          ]
        }
      }
    default:
      return state;
  }
}

export default listRender;