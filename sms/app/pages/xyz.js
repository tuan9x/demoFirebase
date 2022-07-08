import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxx",
  appId: "xxx",
  measurementId: "G-xxxxx",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, firebase };
