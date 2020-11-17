'use strict';
// Global variables
let playerPoints,
    computerPoints,
    score,
    scoreBoardObj;

//Info
console.log ('Legenda: 1 = papier, 2 = kamień, 3 = nożyce');

// Function - moves' names
const getMoveName = function (argMoveId) {
    if (argMoveId == 1){
        return 'kamień';
    }   else if (argMoveId == 2){
        return 'papier';
    }   else if (argMoveId == 3){
        return 'nożyce';
    }   else {
        return 'nieznany ruch';
    }
}

// Score
 const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == argPlayerMove) {
        score = 'Remis';
    } else if (argComputerMove == 'kamień' &&  argPlayerMove == 'papier') {
        score = 'Wygrywasz :)';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        score = 'Przegrywasz :(';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        score = 'Przegrywasz :(';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        score = 'Wygrywasz :)';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        score = 'Wygrywasz :)';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        score = 'Przegrywasz :(';
    } else {score = 'Nieznany zwycięzca';
    }
}
// Start game
const playGame = function (playerInput) {
    clearMessages()
    // Player's choice
    let playerMove = getMoveName (playerInput);
    printMessage ('Wybrany ruch gracza to: ' + playerMove + '.');
    console.log ('Wybór gracza: ' + playerMove + ' ' + playerInput);
    // Computer choice
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName (randomNumber);
    printMessage ('Wylosowany ruch komputera to: ' + computerMove + '.')
    console.log ('Wylosowana wartość: ' + computerMove + ' ' + randomNumber);
    // Score 
    displayResult(computerMove, playerMove);
    printMessage (score);
}

// Score
const scoreBoard = function () {
    if (score == "Remis") {
        playerPoints = 0;
        computerPoints = 0;
    } else if (score == 'Przegrywasz :(') {
        playerPoints = 0;
        computerPoints = 1;
    } else if (score == 'Wygrywasz :)') {
        playerPoints = 1;
        computerPoints = 0;        
    }
}

// Buttons - player's choice
const buttonRock = document.getElementById('button_rock'),
    buttonPaper = document.getElementById('button_paper'),
    buttonScissors = document.getElementById('button_scissors');

    buttonRock.addEventListener ('click', function() {
    playGame (1),
    console.log ('Wynik: ' + score);
    scoreBoard()
    console.log ('Tablica wyników: ' + 'wynik gracza: ' + playerPoints + ' wynik komputera: ' + computerPoints);
    let scoreBoardObj = {player: playerPoints, computer: computerPoints};
    console.log(scoreBoardObj);
});

buttonPaper.addEventListener ('click', function() {
    playGame (2),
    console.log ('Wynik: ' + score);
    scoreBoard()
    console.log ('Tablica wyników: ' + 'wynik gracza: ' + playerPoints + ' wynik komputera: ' + computerPoints);
    let scoreBoardObj = {player: playerPoints, computer: computerPoints};
    console.log(scoreBoardObj);
});

buttonScissors.addEventListener ('click', function() {
    playGame (3),
    console.log ('Wynik: ' + score);
    scoreBoard()
    console.log ('Tablica wyników: ' + 'wynik gracza: ' + playerPoints + ' wynik komputera: ' + computerPoints);
    let scoreBoardObj = {player: playerPoints, computer: computerPoints};
    console.log(scoreBoardObj);
});
   


   