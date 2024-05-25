import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1VxXnCkj5kxHk0t_gUvR9pA-k7RU_-o",
  authDomain: "proyecto1-fightclub.firebaseapp.com",
  projectId: "proyecto1-fightclub",
  storageBucket: "proyecto1-fightclub.appspot.com",
  messagingSenderId: "1014577611685",
  appId: "1:1014577611685:web:713f056e850b2387979e4c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
