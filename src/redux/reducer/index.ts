import { REGISTER, SET_USER, SET_ACCOUNT } from '../actions';
import { resFromBack } from '../../types/Types';

interface actionType {
  type: string;
  payload: resFromBack;
}

const initialState = {
  account: {},
  user: {},
};

export default function rootReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
}
