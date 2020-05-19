import { GET_MINE_LIST,DELETE_POSTS } from '../constants/mine'
import axios from 'axios'

export const deleteposts = (list,i) => {
  return  {
    type: DELETE_POSTS,
    list,
    i
  }
}


// export const getMineMsg = (id,psw) => {
//   return (dispatch) => {
//     axios.get('../../api/mine.json').then((res) =>{
//       const result = res.data.data;
//       dispatch(getMineList());
//     }).catch(()=>{
//     })
//   }
// }