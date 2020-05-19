import axios from 'axios'
import { GET_AUTHOR_MESSAGE } from '../constants/details'

const getAuthorItem = (authorItem) => {
  return {
    type: GET_AUTHOR_MESSAGE,
    authorItem
  }
}


export const getAuthorMsg = (userId) => {
  return (dispatch) => {
    axios.get('../../api/mine.json').then((res) => {
      const result = res.data.data;
      const index = result.findIndex((item) => item.userId == userId)
      const item  = result[index]
      if(item) {
        dispatch(getAuthorItem(item))
      }
    }).catch(() => {      
    })
  }
}