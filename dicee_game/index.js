const dicee1 = document.querySelector(".img1");
const dicee2 = document.querySelector(".img2");
const header = document.querySelector("h1");

function diceeGame() {
    // Random numbers that change the img
    let random_num = Math.floor(Math.random() * 6) + 1;
    let random_num2 = Math.floor(Math.random() * 6) + 1;

    // Setting a value to atributte src according with random_num variables
    dicee1.setAttribute("src", `./images/dice${random_num}.png`);
    dicee2.setAttribute("src", `./images/dice${random_num2}.png`);

    if(random_num === random_num2) {
        header.textContent = "🏳Tie!";
    } else if (random_num2 < random_num){
        header.textContent = "🚩Player1 Wins!";
    } else {
        header.textContent = "🚩Player2 Wins!";
    }

    
}

