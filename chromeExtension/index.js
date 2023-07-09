const inputElement = document.querySelector("#input-el");
const saveElement = document.querySelector("#input-btn");
const ulElement = document.querySelector("#ul-el");

let myLeads = [];

saveElement.addEventListener("click", () => {
    let inputText = inputElement.value;
    myLeads.push(inputText);
    renderLeads();
});

let renderLeads = () => {
    let htmlData = "";
    ulElement.innerHTML = "";
    for (let i = 0; i < myLeads.length; i++) {
        htmlData += `
        <li>
            <a href='https://${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
            </a>
        </li>
    `;
    // without https:// ... -> the leading consider the link as file path, not web page, because of that I add it (https...).
    }
    ulElement.innerHTML = htmlData;
    inputElement.value = "";
};

// we can use another way from line 13 to get the same result
// create element
// set text content
// append to ul
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)