let scoreH = document.getElementById("counter-h") 
let scoreG = document.getElementById("counter-g")


document.getElementById('add-home').addEventListener('click', addHome);


function addHome(event) {
    let textContent = event.target.textContent;
    let cleanText = textContent.replace('+', '').trim();
    let addAmount = parseFloat(cleanText);
    let currentScore = parseFloat(scoreH.innerText || 0);
    
    scoreH.innerText = currentScore + addAmount
    }