let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", () => {
    let firstIndex = Math.floor(Math.random() * fighters.length);
    let secondIndex = Math.floor(Math.random() * fighters.length);

    stageEl.innerHTML = fighters[firstIndex] + " vs " + fighters[secondIndex];
});