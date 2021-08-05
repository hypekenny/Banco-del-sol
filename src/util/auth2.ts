import firebase from 'firebase';

require('firebase/firebase-auth');

export async function login(email: string, password: string) {
  const credential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  console.log('AAAAAAAAAAA', credential.user);
  return credential.user?.uid;
}

export async function register(email: string, password: string) {
  const credential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return credential.user?.uid;
}

export async function logOut() {
  const credential = await firebase.auth().signOut();
  console.log(credential);
}
