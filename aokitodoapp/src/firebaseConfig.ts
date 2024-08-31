import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEe86w9eUFK9BMeSe01h_vQmCsB4idHyw",
  authDomain: "aokitodo-cc01a.firebaseapp.com",
  projectId: "aokitodo-cc01a",
  storageBucket: "aokitodo-cc01a.appspot.com",
  messagingSenderId: "80440871797",
  appId: "1:80440871797:web:e78134cf6f43e8a5f2a13c",
  measurementId: "G-3FJ395PHDH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };