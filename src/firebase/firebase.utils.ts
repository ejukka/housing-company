import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const {
  API_KEY,
  AUTH_DOMAIL,
  DATABSE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGGIGN_SENDER_ID,
  APP_ID
} = process.env;

const key = process.env.API_KEY;
console.log("key: ", key);

const config = {
  apiKey: "test",
  authDomain: AUTH_DOMAIL,
  databaseURL: DATABSE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGGIGN_SENDER_ID,
  appId: APP_ID
};

console.log("config: ", config);

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
