import axios from 'axios';
import firebase from 'firebase';
import { resFromBack, userType } from '../../types/Types';

require('firebase/firebase-auth');

export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_CVU = 'FETCH_CVU';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_NAME = 'GET_NAME';

export function register(user: userType, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email.toLowerCase(), password)
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            axios
              .post<resFromBack>(
                `http://${process.env.IP_ADDRESS}:3001/api/user/`,
                user,
                {
                  headers: {
                    authorization: `Bearer ${idToken}`,
                  },
                },
              )
              .then(responseAgain => {
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseAgain.data.account,
                });
                dispatch({
                  type: SET_USER,
                  payload: responseAgain.data.user,
                });
                dispatch({
                  type: SET_TOKEN,
                  payload: idToken,
                });
              });
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };
}
export function login(email: string, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.toLowerCase(), password)
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            axios
              .get<resFromBack>(
                `http://${process.env.IP_ADDRESS}:3001/api/user/`,
                {
                  headers: {
                    authorization: `Bearer ${idToken}`,
                  },
                },
              )
              .then(responseFromBack => {
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseFromBack.data.account,
                });
                dispatch({
                  type: SET_USER,
                  payload: responseFromBack.data.user,
                });
                dispatch({
                  type: SET_TOKEN,
                  payload: idToken,
                });
              });
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };
}

export function logout() {
  return (dispatch: any) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: LOG_OUT,
          payload: {},
        });
      });
  };
}

export function fetchCvu() {
  return (dispatch: any) => {
    dispatch({
      type: FETCH_CVU,
      payload: true,
    });
  };
}

export function addFunds(
  senderEmail: string,
  receiverEmail: string,
  type: string,
  value: number,
  comment: string,
  token: string,
  dispatch: any,
) {
  axios
    .post(
      `http://${process.env.IP_ADDRESS}:3001/api/account`,
      { senderEmail, receiverEmail, type, value, comment },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then(response => {
      dispatch({
        type: SET_ACCOUNT,
        payload: response.data,
      });
    })
    .catch(error => console.log(error));
}


export const getEmail =
  (emailUser: string, idToken: string, nameUser: string) => dispatch => {
    console.log(emailUser, 'ACTIONS');

    axios
      .get(`http://${process.env.IP_ADDRESS}:3001/api/contacts/${emailUser}`, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
      .then(details => {
        console.log('details', details.data);
        const { email, cvu } = details.data;

        dispatch({
          type: GET_EMAIL,
          payload: { name: nameUser, email: email, cvu: cvu },
        });
      
        dispatch({
          type: GET_NAME,
          payload: ``,
        });
      
      })
      .catch(error => {
        return alert(
          'Este usuario no se encuentra registrado, proximamente lo podras invitar!',
        );
      });
    
  };

export const getName = (emailUser: string, idToken: string) => dispatch => {
  console.log(emailUser, 'ACTIONS');

  axios
    .get(`http://${process.env.IP_ADDRESS}:3001/api/contacts/${emailUser}`, {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    })
    .then(details => {
      const { name, lastName } = details.data;

      dispatch({
        type: GET_NAME,
        payload: `${name} ${lastName}`,
      });
    })
  
    .catch(error => {
      dispatch({
        type: GET_NAME,
        payload: ``,
      });
    
      return alert(
        'Este usuario no se encuentra registrado, proximamente lo podras invitar!',
      );
    
    });
  
};

export const detailContact = (email: string, name: string) => dispatch => {
  
  dispatch({
    type: GET_DETAILS,
    payload: { name: name, email: email },
  });
  
};
export async function updateAccount(
  email: string,
  token: string,
  dispatch: any,
) {
  axios
    .get(`http://${process.env.IP_ADDRESS}:3001/api/account/?${email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
    
      dispatch({
        type: SET_ACCOUNT,
        payload: response.data,
      });
    
    })
  
    .catch(error => console.log(error));
}
