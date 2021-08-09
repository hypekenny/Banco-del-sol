import { REGISTER, SET_USER, SET_ACCOUNT, ALERT_ERROR } from '../actions/index';

interface actionType {
  type: string;
  payload: Object;
}

const initialState = {
  account: {},
  user: {},
  alert: {},
};

export default function rootReducer(state = initialState, action: actionType) {
  console.log('reducer ', action);
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER:
      console.log('c', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case ALERT_ERROR:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
}
