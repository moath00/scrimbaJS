import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
  databaseURL : 'https://realtime-database-b1fc9-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputField = document.querySelector('#input-field');
const addBtn = document.querySelector('#add-button');
const list = document.querySelector('#shopping-list');

const listHTML = list.innerHTML;

let clearInputField = (field) => field.value = '';
let clearHTMLContent = (tag) => tag.innerHTML = '';
let addHTMLContent = (tagToAddedIn, addedTag, item) => {
  let itemID = item[0];
  let itemName = item[1];
  // tag.innerHTML += `<${addedTag}>${value}</${addedTag}>`;

  let newElement = document.createElement(addedTag);

  newElement.addEventListener('click', () => {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItemInDB);
  });
  newElement.textContent = itemName;
  tagToAddedIn.append(newElement);
};

// refactor the code clear input field and the code modify the html contents
addBtn.addEventListener('click', () => {
  let inputValue = inputField.value;
  push(shoppingListDB, inputValue);
  clearInputField(inputField);
});

// Challenge: Change the onValue code so that it uses snapshot.exists() to show items when there are items in the database and if there are not displays the text 'No items here... yet'.
onValue(shoppingListDB, (snapshot) => {
  if (snapshot.exists()) {
    let shoppingListArray = Object.entries(snapshot.val());
    
    clearHTMLContent(list);
    for (let i = 0; i < shoppingListArray.length; i++) {
        let item = shoppingListArray[i];
        addHTMLContent(list, "li", item);
    }
  }
  else {
    list.innerHTML = "No items here... yet";
  }
});