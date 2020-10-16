import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUEMENTID,
};

let app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

//export from  sdk facebook
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
