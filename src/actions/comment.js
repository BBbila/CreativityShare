import { CLICK_PUSH_COMMENT } from '../constants/comment'


export const clickPushComment = (obj) =>{
  return {
    type:CLICK_PUSH_COMMENT,
    obj
  }
}