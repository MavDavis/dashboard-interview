import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCp_Mma9oZNnT6gpxWO_tlTVmtzxCciqsA",
    authDomain: "mavs-blogs.firebaseapp.com",
    projectId: "mavs-blogs",
    storageBucket: "mavs-blogs.appspot.com",
    messagingSenderId: "969178126410",
    appId: "1:969178126410:web:9beb086a82d4b2860faeb3"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()