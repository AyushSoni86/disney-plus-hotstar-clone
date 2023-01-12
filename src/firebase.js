// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  // projectId: "disneyplus-clone-a33d5",
  // storageBucket: "disneyplus-clone-a33d5.appspot.com",
  // messagingSenderId: "37918794208",
  // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  // measurementId: "G-DRVLJKWRWG",
  apiKey: "AIzaSyAfgpyh6yKl-TfEKUk10US__Hh7kNnCch4",
  authDomain: "disney-plus-clone-2f2d7.firebaseapp.com",
  projectId: "disney-plus-clone-2f2d7",
  storageBucket: "disney-plus-clone-2f2d7.appspot.com",
  messagingSenderId: "833022634330",
  appId: "1:833022634330:web:dffa41fbd9261920f2eb63",
  measurementId: "G-6H1B836264"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
