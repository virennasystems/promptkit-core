// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔑 Deine Firebase-Konfiguration (ersetze mit deinen echten Werten)
const firebaseConfig = {
  apiKey: "AIzaSyCeVcxmyCaFmaXUYU-MU-IRS8vFJHt3QCk",
  authDomain: "promptkit-core.firebaseapp.com",
  projectId: "promptkit-core",
  storageBucket: "promptkit-core.appspot.com",
  messagingSenderId: "994242222570",
  appId: "1:994242222570:web:08921e623145024fa87a93"
};

// 🔌 Firebase initialisieren
const app = initializeApp(firebaseConfig);

// 🔐 Auth-Instanz erzeugen
const auth = getAuth(app);

// 📤 Exportiere Funktionen zur Nutzung in anderen Dateien
export {
  auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
