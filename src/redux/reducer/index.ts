import {
  REGISTER,
  SET_USER,
  SET_ACCOUNT,
  LOG_OUT,
  FETCH_CVU,
  SET_TOKEN,
  GET_EMAIL,
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
  Contacts: [],
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
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GET_EMAIL:
      console.log('Reducer', action.payload);
      return {
        ...state,
        Contacts: [
          ...state.Contacts,
          { name: action.payload.name, email: action.payload.email },
        ],
      };
    default:
      return state;
  }
}
