import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCT6aguXsIum3IOGwqTqTSuFMzCreh6raI',
  authDomain: 'balansame-581a7.firebaseapp.com',
  projectId: 'balansame-581a7',
  storageBucket: 'balansame-581a7.appspot.com',
  messagingSenderId: '463626419047',
  appId: '1:463626419047:web:4f2185c4793fdbf7ae4dc2',
  measurementId: 'G-87XWHT7S75',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
