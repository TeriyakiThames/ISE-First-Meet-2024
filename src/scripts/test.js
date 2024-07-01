export function testClick() {
    console.log(randomGroupName())
}

export function randomGroupName() {
    var names = ["The Fool", "The Magician", "The Emperor", "The Lover", "The Chariot", "The Hermit", "The Justice", "The Devil", "The Star", "The Moon", "The Sun", "The World"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
