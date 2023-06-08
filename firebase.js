// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpavFdh5jW2UIIhrBGELn2puCp5ybtk3c",
  authDomain: "htmllogin-68c55.firebaseapp.com",
  projectId: "htmllogin-68c55",
  storageBucket: "htmllogin-68c55.appspot.com",
  messagingSenderId: "203464782578",
  appId: "1:203464782578:web:d7f81cc8d44f2180e2966b",
  measurementId: "G-VFSHWLC1S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

