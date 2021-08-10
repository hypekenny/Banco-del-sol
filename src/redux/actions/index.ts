import axios from 'axios';
import firebase from 'firebase';
import { resFromBack, userType } from '../../types/Types';

require('firebase/firebase-auth');

export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_CVU = 'FETCH_CVU';

export function register(user: userType, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, password)
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            axios
              .post<resFromBack>(`http://localhost:3001/api/user/`, user, {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
              })
              .then(responseAgain => {
                dispatch({
                  type: SET_USER,
                  payload: responseAgain.data.user,
                });
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseAgain.data.account,
                });
                alert('El usuario fue creado con exito');
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
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            axios
              .get<resFromBack>(`http://localhost:3001/api/user/`, {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
              })
              .then(responseFromBack => {
                dispatch({
                  type: SET_USER,
                  payload: responseFromBack.data.user,
                });
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseFromBack.data.account,
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

export function updateBalance(value: number) {
  firebase.auth().onAuthStateChanged(async user => {
    try {
      if (user) {
        const token = await user.getIdToken(true);
        const response = await axios.put(
          `http://localhost:3001/api/account`,
          { value },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.data) {
          return (dispatch: any) => {
            dispatch({
              type: SET_ACCOUNT,
              payload: response.data.account,
            });
          };
        }
      } else {
        console.log('por favor vuelva a autenticarse');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  });
}
