import { LOGIN_TEST, LOGIN_OUT} from '../constants/login'
import axios from 'axios';

export const loginTest = (item,index) => {
  return  {
    type: LOGIN_TEST,
    isLogin: true,
    item,
    index
  }
}

export const loginOut = () => {
  return  {
    type: LOGIN_OUT,
    isLogin: false,
    item: {}
  }
}


export const getLoginMsg = (id,psw) => {
  return (dispatch) => {
    axios.get('../../api/mine.json').then((res) =>{
      const result = res.data.data;
      const index = result.findIndex((item) => item.name == id && item.psw == psw)
      const item  = result[index]
      if(item) {
        dispatch(loginTest(item,index));
      }else {
        alert("您输入的账号或密码输入有误，请仔细检查")
        //dispatch(loginTest(id,psw))
      }
    }).catch(()=>{
    })
  }
}