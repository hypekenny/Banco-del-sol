// import firebase from 'firebase';

// require('firebase/firebase-auth');

// export async function login(email: string, password: string) {
//   const credential = await firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password);
//   console.log('LOGIN', credential.user);
//   return credential.user?.uid;
// }

// export async function register(email: string, password: string) {
//   const credential = await firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
//   if (credential.user?.emailVerified === false) {
//     credential.user?.sendEmailVerification();
//   }
//   console.log('REGISTER', credential.user);
//   return credential.user;
// }

// export async function logOut() {
//   const credential = await firebase.auth().signOut();
//   console.log(credential);
// }
