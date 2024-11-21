import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtjsEdOL9qk3v5QBp-S0Fe9mSuNRkZsAM",
  authDomain: "progect-sneakers.firebaseapp.com",
  projectId: "progect-sneakers",
  storageBucket: "progect-sneakers.appspot.com",
  messagingSenderId: "614572943660",
  appId: "1:614572943660:web:bf43eadfd837dac969a489",
  measurementId: "G-4XQPNGQZEM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
