import { readDB } from "../scripts/read.js";
import { groupNameList } from "../scripts/data.js";

async function appendGroupData() {
	for (let i = 0; i < 12; i++) {
		try {
			// Wait for readDB that searches the group name then displays it.
			var groupName = groupNameList[i];
			const result = await readDB(groupName);
			if (result.length > 0) {
				// If there is something, change stuff by using doc ID
				document.getElementById(groupName).innerHTML = result[0] + " cards";
				// console.log(result);
			} else {
				console.log("No data found for group:", groupName);
			}
		} catch (error) {
			console.error("Error reading data:", error);
		}
	}
}

// Call the function to run it 12 times
appendGroupData();
