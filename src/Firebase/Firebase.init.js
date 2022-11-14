// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUMC6pAJpGNbcod1DfXbkhvsk-ZbbjUc",
  authDomain: "random-user-2dfe0.firebaseapp.com",
  projectId: "random-user-2dfe0",
  storageBucket: "random-user-2dfe0.appspot.com",
  messagingSenderId: "409982771714",
  appId: "1:409982771714:web:feed3c39dd44fad03bbd1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;