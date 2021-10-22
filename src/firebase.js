
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8ocYUpFY0r234T7XKaRrM2sBRwLxthic",
  authDomain: "clone-da0d2.firebaseapp.com",
  projectId: "clone-da0d2",
  storageBucket: "clone-da0d2.appspot.com",
  messagingSenderId: "563624767817",
  appId: "1:563624767817:web:a96ec338bc438d13eeea98",
  measurementId: "G-T5HD8PJ8K0"
});

const auth = firebaseApp.auth();

export { auth };