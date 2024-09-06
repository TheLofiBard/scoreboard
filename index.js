let home = 0;
let scoreH = document.getElementById('counter-h');
let guest = 0;
let scoreG = document.getElementById('counter-g');


function addHome(event) {
    let addAmount = event.target.textContent;
    let cleanText = addAmount.replace('+', '');
    let isNumber = parseFloat(cleanText)
    home += isNumber;
    scoreH.textContent = home;
}

function addGuest(event) {
    let addAmount = event.target.textContent;
    let cleanText = addAmount.replace('+', '');
    let isNumber = parseFloat(cleanText)
    guest += isNumber;
    scoreG.textContent = guest;
}

function clearHome() {
    home = 0;
    scoreH.textContent = home;
}

function clearGuest() {
    guest = 0;
    scoreG.textContent = guest;
}