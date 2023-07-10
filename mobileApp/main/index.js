import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
  databaseURL : 'https://realtime-database-b1fc9-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputField = document.querySelector('#input-field');
const addBtn = document.querySelector('#add-button');
const list = document.querySelector('#shopping-list');

let clearInputField = (field) => field.value = '';
let addHTMLContent = (tag, addedTag, value) => {
  tag.innerHTML += `<${addedTag}>${value}</${addedTag}>`;
};

// refactor the code clear input field and the code modify the html contents
addBtn.addEventListener('click', () => {
  let inputValue = inputField.value;
  push(shoppingListDB, inputValue);
  clearInputField(inputField);
  addHTMLContent(list, li, inputValue);
});