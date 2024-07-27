import { db, groupName } from "../firebase.js";
import { getDoc, doc } from "firebase/firestore";

export function randomGroup() {
	return groupName[Math.floor(Math.random() * 12)];
}

export async function readDB(inputName) {
	const groupName = inputName; // Get a random group name
	const docRef = doc(db, "Groups", groupName);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();
		console.log(`${docSnap.id}`);
		console.log(`cardNumber: ${data.cardNumber}`);
		console.log(`Name: ${data.name}`);
		return [data.cardNumber.toString(), data.name.toString()];
	} else {
		console.log("No such document!");
		return;
	}
}
