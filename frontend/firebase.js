import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "khaja-ghar-7868b.firebaseapp.com",
  projectId: "khaja-ghar-7868b",
  storageBucket: "khaja-ghar-7868b.firebasestorage.app",
  messagingSenderId: "917340511400",
  appId: "1:917340511400:web:f2e75cab78248fcc59b69d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };