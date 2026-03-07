// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzXJqnCwKD0INAEJzCFzzlI0W-0YlTTRc",
  authDomain: "solosphere-project-62f19.firebaseapp.com",
  projectId: "solosphere-project-62f19",
  storageBucket: "solosphere-project-62f19.firebasestorage.app",
  messagingSenderId: "176130682237",
  appId: "1:176130682237:web:4474fe01a5a8104d10f014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);