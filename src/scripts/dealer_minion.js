import { readDB } from "./read.js";
import { groupNameList } from "./data.js";

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
				console.log(cardInfo);
			} catch (error) {
				console.error("Error fetching card info:", error);
			}
		}
	});
