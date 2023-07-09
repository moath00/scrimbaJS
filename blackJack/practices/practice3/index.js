// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

let printCountries = () => {
    for (let i = 0; i < largeCountries.length; i++) {
        if (largeCountries[i] === "USA") {
            console.log("- United States");
        }
        else {
            console.log("- " + largeCountries[i]);
        }
    }
};

let editCountries = () => {
    largeCountries.pop();
    largeCountries.push("Pakistan");
    largeCountries.shift();
    largeCountries.unshift("China");
    console.log(largeCountries);
}

editCountries();