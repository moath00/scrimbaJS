let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

let sortShelves = () => {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎")
            appleShelf.textContent += fruit[i]  + "   ";
        else
            orangeShelf.textContent += fruit[i] + "   ";
    }
};

sortShelves();