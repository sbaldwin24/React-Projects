import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA_j1xeVblKwMoMSBhnxX6sm82MAn0dJFs",
  authDomain: "lunch-rush-c6a8d.firebaseapp.com",
  databaseURL: "https://lunch-rush-c6a8d.firebaseio.com",
  projectId: "lunch-rush-c6a8d",
  storageBucket: "lunch-rush-c6a8d.appspot.com",
  messagingSenderId: "338051487579"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
