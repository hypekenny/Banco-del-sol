import axios from 'axios';
import firebase from 'firebase';
import { userType, resFromBack } from '../../types/Types';

require('firebase/firebase-auth');

export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';
export const SET_ACCOUNT = 'SET_ACCOUNT';

export function register() {
  const obj = {
    name: 'ricardo',
    lastName: 'rabufeti',
    email: 'lasdal@hotmail.com',
    dni: 546665421,
    birthdate: 'eweqeqweq',
    phoneNumber: '32323232',
  };

  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(obj.email, 'lalalala')
      .then(response => {
        response.user
          ?.getIdToken(true)
          .then(idToken => {
            console.log(idToken);
            axios
              .post<resFromBack>(`http://localhost:3001/api/user/`, {
                headers: {
                  authorization: `Bearer ${idToken}`,
                },
                obj,
              })
              .then(responseAgain => {
                console.log('el back dice', responseAgain);
                dispatch({
                  type: SET_USER,
                  payload: responseAgain.data.user,
                });
                dispatch({
                  type: SET_ACCOUNT,
                  payload: responseAgain.data.account,
                });
              });
          })
          .catch(error => console.log('a', error));
      })
      .catch(() => alert('El mail no está registrado'));
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
                  authorization: idToken,
                },
              })
              .then(responseFromBack => {
                console.log('el back dice', responseFromBack);
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

export function createAccount(user: userType) {
  axios.post(`http://localhost:3001/api/user/${user.email}`, user);
}

export async function logout() {
  await firebase.auth().signOut();
}
