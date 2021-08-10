import {
  REGISTER,
  SET_USER,
  SET_ACCOUNT,
  LOG_OUT,
  FETCH_CVU,
} from '../actions/index';

interface actionType {
  type: string;
  payload: Object;
}

const initialState = {
  account: {},
  user: {},
  token: '',
  cvuAsociate: false,
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
    case LOG_OUT:
      return {
        ...state,
        account: action.payload,
        user: action.payload,
      };
    case FETCH_CVU:
      return {
        ...state,
        cvuAsociate: action.payload,
      };
    default:
      return state;
  }
}
