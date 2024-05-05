// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjHLj1c54z5SAL-M5wHmacYAVmz2poCrE",
  authDomain: "real-estate-cf48d.firebaseapp.com",
  projectId: "real-estate-cf48d",
  storageBucket: "real-estate-cf48d.appspot.com",
  messagingSenderId: "781107370760",
  appId: "1:781107370760:web:08500a8a8f51712015eabd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };