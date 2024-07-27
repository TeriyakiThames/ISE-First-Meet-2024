import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	getDoc,
	setDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyByuVonqqni8v-zmMa4fhXrp6jldi7hHFk",
	authDomain: "ise-first-meet.firebaseapp.com",
	projectId: "ise-first-meet",
	storageBucket: "ise-first-meet.appspot.com",
	messagingSenderId: "155574358730",
	appId: "1:155574358730:web:1f1dab0aca4eb51981da33",
	measurementId: "G-ZTLS98Z0ZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
