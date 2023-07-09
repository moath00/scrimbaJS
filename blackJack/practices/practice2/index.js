let age = 15;

let ageDiscount = (age) => {
    if (age < 6)
        return "Free";
    else if (age <= 17)
        return "Child discount";
    else if (age <= 26)
        return "Student discount";
    else if (age <= 66)
        return "Full price";
    else
        return "Senior citizen discount";
}

console.log(ageDiscount(age));