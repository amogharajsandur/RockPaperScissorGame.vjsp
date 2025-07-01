// let fullScreenToggle = document.querySelector("body");

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

rockButton.onclick = selected(rockButton);
paperButton.onclick = selected(paperButton);
scissorsButton.onclick = selected(scissorsButton);

function selected(x) {
    console.log(x.value);
}
