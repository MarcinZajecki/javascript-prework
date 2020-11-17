'use strict';
// Global variables
let playerPoints = 0,
    computerPoints = 0,
    score;

//Info
console.log ('Legenda: 1 = papier, 2 = kamień, 3 = nożyce');

// Function - moves' names
const getMoveName = function (argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    }   else if (argMoveId == 2) {
        return 'papier';
    }   else if (argMoveId == 3) {
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

// Buttons - player's choice
const buttonRock = document.getElementById('button_rock'),
    buttonPaper = document.getElementById('button_paper'),
    buttonScissors = document.getElementById('button_scissors');

    buttonRock.addEventListener ('click', function() {
    playGame (1),
    console.log ('Wynik: ' + score);
    if (score == 'Wygrywasz :)') {
        playerPoints++;
    } else if (score == 'Przegrywasz :(') {
        computerPoints++;
    }
    printScore('Punkty gracza: ' + playerPoints + ' Punkty przeciwnika: ' + computerPoints);
});

buttonPaper.addEventListener ('click', function() {
    playGame (2),
    console.log ('Wynik: ' + score);
    if (score == 'Wygrywasz :)') {
        playerPoints++;
    } else if (score == 'Przegrywasz :(') {
        computerPoints++;
    }
    printScore('Punkty gracza: ' + playerPoints + ' Punkty przeciwnika: ' + computerPoints);
});

buttonScissors.addEventListener ('click', function() {
    playGame (3),
    console.log ('Wynik: ' + score);
    if (score == 'Wygrywasz :)') {
        playerPoints++;
    } else if (score == 'Przegrywasz :(') {
        computerPoints++;
    }
    console.log('punkty gracza: ', playerPoints);
    printScore('Punkty gracza: ' + playerPoints + ' Punkty przeciwnika: ' + computerPoints);
});

