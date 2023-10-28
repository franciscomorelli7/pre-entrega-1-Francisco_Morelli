
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDUwuBvc_XgdJw0VBzMCL375AqvANn5iKY",
  authDomain: "franciscomorelliproyectofinal.firebaseapp.com",
  projectId: "franciscomorelliproyectofinal",
  storageBucket: "franciscomorelliproyectofinal.appspot.com",
  messagingSenderId: "917697227757",
  appId: "1:917697227757:web:32ae527861219683ae55e4",
  measurementId: "G-WBPD8B4969"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)