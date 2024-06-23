// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMVstPFvG-tE90mayRkorgIUNMgGO4wW0",
  authDomain: "afrihomes-7505c.firebaseapp.com",
  projectId: "afrihomes-7505c",
  storageBucket: "afrihomes-7505c.appspot.com",
  messagingSenderId: "376004593031",
  appId: "1:376004593031:web:25453a1eb6562569413f22",
  measurementId: "G-KLBVL4FN8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
