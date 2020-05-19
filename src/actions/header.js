import { GET_HOTWORD_LIST, CHANGE_HOTWORD} from '../constants/header'
import axios from 'axios'

export const getHotWordList = (list) => {
  return {
    type: GET_HOTWORD_LIST,
    list,
    totalPage: Math.ceil(list.length / 10)
  }
}

export const ChangeHotWord = (page) => {
  return {
    type: CHANGE_HOTWORD,
    page
  }
}

export const getHotWordListMsg  = () => {
  return (dispatch) => {
    axios.get('../../api/hotWord.json').then((res)=>{
      const result =res.data.data
      dispatch(getHotWordList(result))
    }).catch(()=>{

    })
  }
}