import axios from 'axios';
import firebase from 'firebase';

// import { resFromBack } from '../../types/Types';
import { resFromBack, userType } from '../../types/Types';

require('firebase/firebase-auth');

export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const ALERT_ERROR = 'ALERT_ERROR';

export function register(user: userType, password: string) {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, password)
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            console.log(idToken);
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
                  type: SET_USER,
                  payload: responseAgain.data.user,
                });
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseAgain.data.account,
                });
                dispatch({
                  type: ALERT_ERROR,
                  payload: alert('El usuario fue creado con exito'),
                });
                console.log('el back dice', responseAgain);
              });
          })
          .catch(error => console.log('a', error));
      })
      .catch(() => alert('Ese Email ya existe '));
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
                console.log('Response from back', responseFromBack.data);
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
          .catch(error => console.log('a', error));
      })
      .catch(() => alert('El mail no está registrado'));
  };
}

export async function logout() {
  await firebase.auth().signOut();
}
