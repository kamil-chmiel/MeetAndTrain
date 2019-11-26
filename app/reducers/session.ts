import {SET_SESSION} from '../actions/actionTypes';

export default (state = {}, {type, payload}) => {
  switch (type) {
    case SET_SESSION: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};
