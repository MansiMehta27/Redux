// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqDGjyZCkBCbOOAzIKYeO6uXeVyZViX4Q",
  authDomain: "fir-component-955a7.firebaseapp.com",
  projectId: "fir-component-955a7",
  storageBucket: "fir-component-955a7.appspot.com",
  messagingSenderId: "972036576946",
  appId: "1:972036576946:web:55be687f7b21922812dbab",
  measurementId: "G-PYK66KZJNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
