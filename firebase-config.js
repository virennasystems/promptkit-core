// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeVcxmyCaFmaXUYU-MU-IRS8vFJHt3QCk", // <-- dein Key hier
  authDomain: "promptkit-core.firebaseapp.com",
  projectId: "promptkit-core",
  storageBucket: "promptkit-core.firebasestorage.app",
  messagingSenderId: "994242222570",
  appId: "1:994242222570:web:08921e623145024fa87a93"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporte für Login-Integration
export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
