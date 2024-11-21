import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-9PqpISh-HtsDOAAZeGPXabQ76YdpxIs",
  authDomain: "true-sneakers.firebaseapp.com",
  projectId: "true-sneakers",
  storageBucket: "true-sneakers.firebasestorage.app",
  messagingSenderId: "309490264206",
  appId: "1:309490264206:web:e4c07bd8d92a97432bc1df"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
