import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4bZxr495sb43fLNydyrOrDE6Zyprrv0Q",
  authDomain: "min-slack.firebaseapp.com",
  databaseURL: "https://min-slack.firebaseio.com",
  projectId: "min-slack",
  storageBucket: "min-slack.appspot.com",
  messagingSenderId: "870646250951",
  appId: "1:870646250951:web:556c282cee3e06c5d66de2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export default firebase;
