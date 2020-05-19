import { GET_HOTWORD_LIST, CHANGE_HOTWORD} from '../constants/header'

const initState = {
  hotWordList:[],
  page: 1,
  totalPage: 0,
}

const header =(state = initState,action={}) => {
  switch (action.type) {
    case GET_HOTWORD_LIST:
      return {
        ...state,
        hotWordList: action.list,
        totalPage: action.totalPage
      }
    case CHANGE_HOTWORD:
      return {
        ...state,
        page: action.page,
      }
    default: 
    return state;
  }
}

export default header;

