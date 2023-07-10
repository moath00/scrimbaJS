// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.69235632455;
// if we convert the price to "string number"
const totalPrice = "420.69235632455";

const purchasingBtn = document.querySelector("#purchase-btn");

const dot = totalPrice.indexOf(".");
purchasingBtn.textContent = `Buy €${ totalPrice.substring(0, dot+3) }`; // because last index is not inclusive
// purchasingBtn.textContent = `Buy ${ Number(totalPrice).toFixed(2) }`;
// another way to round is 
// purchasingBtn.textContent = `Buy €${ Math.round(totalPrice * 100) / 100 }`;