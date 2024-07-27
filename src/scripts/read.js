import { db } from "../firebase.js";
import { getDoc, doc } from "firebase/firestore";

export async function readDB(inputName) {
	const docRef = doc(db, "Groups", inputName);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();
		return [data.cardNumber.toString(), data.name.toString()];
	} else {
		console.log("No such document!");
		return;
	}
}
