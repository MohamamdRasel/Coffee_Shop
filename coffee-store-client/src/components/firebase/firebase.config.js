// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZxt0ZBCOkdvB474bSYTuQlsAeN0-biLg",
  authDomain: "unique-coffee-shop.firebaseapp.com",
  projectId: "unique-coffee-shop",
  storageBucket: "unique-coffee-shop.appspot.com",
  messagingSenderId: "715801168256",
  appId: "1:715801168256:web:7bfde75560fca6f4d7d965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;