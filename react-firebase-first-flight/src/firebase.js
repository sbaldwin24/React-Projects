import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC6JEkimB5hx3WjS3mEAVXEj3CifQ-O9KY",
  authDomain: "first-flight-d3dbc.firebaseapp.com",
  databaseURL: "https://first-flight-d3dbc.firebaseio.com",
  projectId: "first-flight-d3dbc",
  storageBucket: "first-flight-d3dbc.appspot.com",
  messagingSenderId: "436948535083"
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
