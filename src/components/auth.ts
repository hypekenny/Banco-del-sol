import firebase from 'firebase';

require('firebase/firebase-auth');

export async function login(email: string, password: string) {
  try {
    const credential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log('LOGIN', credential.user?.getIdToken());
    return credential.user?.getIdToken();
  } catch (error) {
    return console.log(error);
  }
}

export async function register(email: string, password: string) {
  try {
    const credential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (credential.user?.emailVerified === false) {
      credential.user?.sendEmailVerification();
    }
    console.log('REGISTER', credential.user);
    return credential.user;
  } catch (error) {
    return console.log(error);
  }
}

export async function logOut() {
  try {
    const credential = await firebase.auth().signOut();
    console.log(credential);
  } catch (error) {
    console.log(error);
  }
}
