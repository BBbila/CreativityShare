import {
  SET_TIME_SORT,
  SET_HOT_SORT,
} from '../constants/sort';

export const SetTimeSort = () =>  {
  return {
      type: SET_TIME_SORT
  };
}

export const SetHotSort = () =>  {
  return {
      type: SET_HOT_SORT
  };
}