// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cbc6a.firebaseapp.com",
  projectId: "mern-estate-cbc6a",
  storageBucket: "mern-estate-cbc6a.appspot.com",
  messagingSenderId: "1063660597662",
  appId: "1:1063660597662:web:f1d82bd797c03d1250268f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
