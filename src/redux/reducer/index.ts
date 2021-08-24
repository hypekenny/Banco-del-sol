/* eslint-disable no-case-declarations */
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
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  REMOVE_CONTACT,
  CLEAR_ERRORS,
  SET_MESSAGE,
  SET_SUCCEED,
} from '../actions/index';

interface actionType {
  type: string;
  payload: {
    name: string;
    email: string;
    lastName: string;
    cvu: string;
    user: string;
  };
}

export const initialState = {
  account: {},
  user: {},
  token: '',
  cvuAsociate: false,
  Contacts: [],
  DetailTransfer: {},
  nameDetail: '',
  errors: '',
  loading: false,
  message: '',
  succeed: false,
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
        nameDetail: action.payload.user,
      };

    case SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_CONTACT:
      const newContacts = state.Contacts.filter(
        contact => contact.email !== action.payload,
      );
      return {
        ...state,
        Contacts: newContacts,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: '',
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case SET_SUCCEED:
      return {
        ...state,
        succeed: action.payload,
      };
    default:
      return state;
  }
}
