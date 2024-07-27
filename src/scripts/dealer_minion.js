import { readDB } from "./read.js";
import { groupNameList } from "./data.js";
import { db } from "../firebase.js";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import GroupInfo from "../components/Group_info.astro";

// Changes Current Info tabs in dealer minion
document
	.getElementById("selectorButtons")
	.addEventListener("click", async function (event) {
		if (event.target.tagName === "BUTTON") {
			const cardId = event.target.id;
			try {
				const cardInfo = await readDB(groupNameList[cardId]);
				document.getElementById("currentName").innerHTML = cardInfo[1];
				document.getElementById("currentNumber").innerHTML =
					cardInfo[0] + " cards";
			} catch (error) {
				console.error("Error fetching card info:", error);
			}
		}
	});

// Updates card number in the database
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("forms").addEventListener("submit", async (event) => {
		event.preventDefault();

		const password = document.getElementById("password").value;
		const groupName = document.getElementById("groupName").value;
		const number = parseInt(document.getElementById("cardNumber").value, 10);

		try {
			// Check password
			const passwordDocRef = doc(db, "Dealer", "passwordDoc");
			const passwordDoc = await getDoc(passwordDocRef);

			if (passwordDoc.exists()) {
				const storedPassword = passwordDoc.data().password;
			} else {
				console.error("No such document!");
			}

			const storedPassword = passwordDoc.data().password;
			if (password !== storedPassword) {
				console.error("Incorrect password!");
				return;
			}

			await updateDoc(doc(collection(db, "Groups"), groupName), {
				cardNumber: number,
			});

			console.log(`Card number of ${groupName} is now ${number}!`);
		} catch (error) {
			console.error("Error:", error);
		}
	});
});
