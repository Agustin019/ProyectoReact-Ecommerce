// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementI d is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjvOshIeaHHCJkdi0qGjoQQZLDvp7ufCI",
  authDomain: "flor-bazar.firebaseapp.com",
  projectId: "flor-bazar",
  storageBucket: "flor-bazar.appspot.com",
  messagingSenderId: "428071630826",
  appId: "1:428071630826:web:55003562d16ee0bd426493",
  measurementId: "G-CR2JB24S0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;