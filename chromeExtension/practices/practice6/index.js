// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
];

const container = document.querySelector('#container');

let render = () => {
    let imgsHtml = "";
    for (let i = 0; i < imgs.length; i++) {
        imgsHtml += `<img src="${imgs[i]}" alt="Employees of company" class="team-img"/>`;
    }
    container.innerHTML = imgsHtml;
};

render();