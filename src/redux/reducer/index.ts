import {
  REGISTER,
  SET_USER,
  SET_ACCOUNT,
  LOG_OUT,
  FETCH_CVU,
  SET_TOKEN,
  GET_EMAIL,
  GET_DETAILS,
  GET_NAME,
  SET_ERROR,
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
  DetailTransfer: {},
  nameDetail: '',
  errors: {},
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
      return {
        ...state,
        Contacts: [
          ...state.Contacts,
          {
            name: action.payload.name,
            lastName: action.payload.lastName,
            email: action.payload.email,
            cvu: action.payload.cvu,
          },
        ],
      };
    case GET_DETAILS:
      return {
        ...state,
        DetailTransfer: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    case GET_NAME:
      return {
        ...state,
        nameDetail: action.payload,
      };
    default:
      return state;
  }
}
