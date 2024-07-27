
//https://firebase.google.com/docs/firestore/quickstart#read_data

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

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
const db = getFirestore(app)

// Function to read from Firestore
export async function readFromDB() {
    const querySnapshot = await getDocs(collection(db, "Groups"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });    
}

export async function readFromDocument() {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }   
}

