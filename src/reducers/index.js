import { combineReducers } from 'redux';
import details from './details'
import login from './login';
import listRender from './listRender'
import food from './food'
import header from './header'
import mine from './mine'
import comment from './comment'

export default combineReducers({
  details,
  login,
  listRender,
  food,
  header,
  mine,
  comment
});