  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 import {getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD9-nVMAgMSXbKhMPY0C7qBWdu21fS6uec",
    authDomain: "reparto-modulos-9f7c7.firebaseapp.com",
    projectId: "reparto-modulos-9f7c7",
    storageBucket: "reparto-modulos-9f7c7.appspot.com",
    messagingSenderId: "96308681304",
    appId: "1:96308681304:web:2abac8e160a7cf0fb4c82d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export const obtenerModulos =() => getDocs(collection(db,"Técnicos", "Secundaria"));