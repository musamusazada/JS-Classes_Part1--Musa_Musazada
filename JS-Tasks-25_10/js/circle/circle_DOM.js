let circleContainer = document.querySelector(".circle-container");
let radiusInput = document.getElementById("radius");
let nameCircle = document.getElementById("name");

let colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

function circleMaker() {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = `${(radiusInput.value**2 * 3.14)/100}px`;
    circle.style.height = `${(radiusInput.value**2 * 3.14)/100}px`;
    circle.style.backgroundColor = `${colors[parseInt(Math.random()*colors.length)]}`;

    circle.innerText = `Name: ${nameCircle.value}\nArea: ${Math.round(radiusInput.value**2 * 3.14)}\n Length: ${Math.round(radiusInput.value*2 * 3.14)}`;
    circleContainer.appendChild(circle);
}