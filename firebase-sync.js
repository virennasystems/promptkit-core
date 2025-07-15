// firebase-sync.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔐 Deine Konfiguration
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "promptkit-core.firebaseapp.com",
  projectId: "promptkit-core",
  storageBucket: "promptkit-core.appspot.com",
  messagingSenderId: "994242222570",
  appId: "1:994242222570:web:08921e623145024fa87a93"
};

// 🚀 Firebase App + Dienste initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 🔼 Prompts hochladen (überschreibt vorhandene)
export async function uploadPrompts(promptDB) {
  const batch = Object.entries(promptDB).map(([title, data]) => {
    return setDoc(doc(db, "prompts", title), {
      text: data.text,
      tags: data.tags || []
    });
  });

  try {
    await Promise.all(batch);
    alert("☁️ Prompts erfolgreich in die Cloud geladen.");
  } catch (err) {
    alert("❌ Upload fehlgeschlagen: " + err.message);
  }
}

// 🔽 Prompts laden
export async function downloadPrompts() {
  try {
    const snapshot = await getDocs(collection(db, "prompts"));
    const prompts = {};
    snapshot.forEach(doc => {
      prompts[doc.id] = doc.data();
    });
    alert("☁️ Prompts erfolgreich aus der Cloud geladen.");
    return prompts;
  } catch (err) {
    alert("❌ Download fehlgeschlagen: " + err.message);
    return {};
  }
}

// 🔍 Ist jemand eingeloggt?
export function isUserAuthenticated(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(!!user);
  });
}
