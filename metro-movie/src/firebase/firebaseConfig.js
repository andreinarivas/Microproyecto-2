//Configuración para la conexión con Firebase y Firestore

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu-8inJ2BofiWNMl-OX5niSJt0ZbiLP48",
  authDomain: "metro-movies-bac72.firebaseapp.com",
  projectId: "metro-movies-bac72",
  storageBucket: "metro-movies-bac72.appspot.com",
  messagingSenderId: "699704564499",
  appId: "1:699704564499:web:df555c5d82dc56d1b658e6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
