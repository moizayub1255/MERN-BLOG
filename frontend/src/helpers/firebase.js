import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-511b4.firebaseapp.com",
  databaseURL: "https://blog-511b4-default-rtdb.firebaseio.com",
  projectId: "blog-511b4",
  storageBucket: "blog-511b4.firebasestorage.app",
  messagingSenderId: "467474103899",
  appId: "1:467474103899:web:538f86cb859d234bf8c97e",
  measurementId: "G-RYQ0H06G54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }