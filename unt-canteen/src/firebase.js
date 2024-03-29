// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage,} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQq3qt3BpdZo_wwErdk0k2ogyRZDUBAIc",
  authDomain: "unt-canteen.firebaseapp.com",
  projectId: "unt-canteen",
  storageBucket: "unt-canteen.appspot.com",
  messagingSenderId: "140302535825",
  appId: "1:140302535825:web:727dd419caa128d7218330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(); 