import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-b1fc9-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksInDB = ref(database, "Books");

const booksEl = document.getElementById("books");

onValue(booksInDB, (snapshot) => {
    let booksArray = Object.values(snapshot.val());
    
    clearInputField(booksEl);
    for (let i = 0; i < booksArray.length; i++) {
        let book = booksArray[i];
        addHTMLContent(book);
    }
});

let clearInputField = (field) => field.innerHTML = '';
let addHTMLContent = (bookValue) => {
    booksEl.innerHTML += `<li>${bookValue}</li>`;
};