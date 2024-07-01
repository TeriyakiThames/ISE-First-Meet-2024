// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByuVonqqni8v-zmMa4fhXrp6jldi7hHFk",
    authDomain: "ise-first-meet.firebaseapp.com",
    projectId: "ise-first-meet",
    storageBucket: "ise-first-meet.appspot.com",
    messagingSenderId: "155574358730",
    appId: "1:155574358730:web:1f1dab0aca4eb51981da33",
    measurementId: "G-ZTLS98Z0ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//https://youtu.be/Kjro6HzFCk0?t=406 from this video
//https://firebase.google.com/docs/firestore/quickstart#add_data
export const firestore_db = getFirestore(app)
