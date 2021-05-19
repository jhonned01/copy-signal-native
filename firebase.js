import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC8cgUaekwknUnq3Eckaw1mJ-4qeiCqjZk",
  authDomain: "signal-clo-49a39.firebaseapp.com",
  projectId: "signal-clo-49a39",
  storageBucket: "signal-clo-49a39.appspot.com",
  messagingSenderId: "329940932914",
  appId: "1:329940932914:web:1f2f4beaab3524845e9f2b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
