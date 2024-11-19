import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCciicB_A2GNix5JnALk4QKZourq-ugcNM",
  authDomain: "reactjs-bustos-65115.firebaseapp.com",
  projectId: "reactjs-bustos-65115",
  storageBucket: "reactjs-bustos-65115.firebasestorage.app",
  messagingSenderId: "973964933723",
  appId: "1:973964933723:web:a92f1cb734f0d6ff2c9d7e"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db