const inputElement = document.querySelector("#input-el");
const saveElement = document.querySelector("#input-btn");
const tabSaveElement = document.querySelector("#tab-btn")
const deleteElement = document.querySelector("#delete-btn");
const ulElement = document.querySelector("#ul-el");

let render = (leads) => {
    let htmlData = "";
    ulElement.innerHTML = "";
    for (let i = 0; i < leads.length; i++) {
        htmlData += `
        <li>
            <a href='https://${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>
    `;
    // without https:// ... -> the leading consider the link as file path, not web page, because of that I add it (https...).
    }
    ulElement.innerHTML = htmlData;
    inputElement.value = "";
};

let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


saveElement.addEventListener("click", () => {
    let inputText = inputElement.value;
    myLeads.unshift(inputText);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"));
    render(myLeads);
});

tabSaveElement.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.unshift(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

deleteElement.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});


// Sixth task
// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.youtube.com");

// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

// Fifth task
// localStorage.setItem("My name","Moath Hjjawi");
// const name = localStorage.getItem("My name");
// console.log(name);
// localStorage.clear();


// ########################################## ************ ########################################## //
// let htmlData += "<li>" + myLead[i] + "</li>";
// we can use another way from previous line to get the same result
// create element
// set text content
// append to ul
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEl.append(li);

// truly values
// [] and any value except the falsy mentioned

// falsy values
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// variables vs arguments vs parameters
// variables are values outside of function and its call
// arguments are values or variables passed to function call, outside of function too
// parameters are values used in function, inside of function, its signature