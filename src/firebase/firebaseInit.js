const firebaseConfig = {
  apiKey: "AIzaSyCp_Mma9oZNnT6gpxWO_tlTVmtzxCciqsA",
  authDomain: "mavs-blogs.firebaseapp.com",
  projectId: "mavs-blogs",
  storageBucket: "mavs-blogs.appspot.com",
  messagingSenderId: "969178126410",
  appId: "1:969178126410:web:9beb086a82d4b2860faeb3"
};


import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

  
  export const firebaseApp = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(firebaseApp)

  export const db = getFirestore(firebaseApp);