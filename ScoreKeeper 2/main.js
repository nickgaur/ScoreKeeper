// PLAYER 1
var player_1_inc = document.querySelector(".player-1");
var player_1_score = document.querySelector(".player-1-score");
var score1 = 0;

// some useful var
var gameover = false;
var input = document.querySelector("select");
input.value = 7;



// PLAYER 2
var player_2_inc = document.querySelector(".player-2");
var player_2_score = document.querySelector(".player-2-score");
var score2 = 0;

// RESET
var reset = document.querySelector(".reset");

// incrementing score on clicking button
const score_increament = (score) => {
    return score += 1;
}

// disabling button
const disable = (winner, loser) => {
    player_1_inc.classList.add("disabled");
    player_2_inc.classList.add("disabled");
    winner.style.color = "green";
    loser.style.color = "red";
    
}

// enabling button
const enable = () => {
    player_1_inc.classList.remove("disabled");
    player_2_inc.classList.remove("disabled");
    player_1_score.style.color = "black";
    player_2_score.style.color = "black";
}

// resetting
var resetting = () => {
    score1 = 0;
    score2 = 0;
    player_1_score.innerHTML = score1;
    player_2_score.innerHTML = score2;
    enable();
    gameover = false;
}

// clicking player1 button
player_1_inc.addEventListener("click", () => {
    score1 = score_increament(score1)
    if (!gameover){
        player_1_score.innerHTML = score1;
        if (score1 == input.value || score2 == input.value){
            gameover = true;
            disable(player_1_score, player_2_score);
        }
    }
})

// clicking player2 button
player_2_inc.addEventListener("click", () => {
    score2 = score_increament(score2);
    if (!gameover){
        player_2_score.innerHTML = score2;
        if (score1 == input.value || score2 == input.value){
            gameover = true;
            disable(player_2_score, player_1_score);
        }
    }
})

// clicking reset button
reset.addEventListener("click", () => {
    resetting();
})
