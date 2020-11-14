function playGame (playerInput) {
    clearMessages()
    // Function - moves' names
    function getMoveName (argMoveId) {
        if (argMoveId == 1){
            return 'kamień';
        }   
        else if (argMoveId == 2){
            return 'papier';
        }   
        else if (argMoveId == 3){
            return 'nożyce';
        }   
        else {
            return 'nieznany ruch';
        }
    }

    console.log ('Legenda: 1 = papier, 2 = kamień, 3 = nożyce');

    // Player choice
    let playerMove = getMoveName (playerInput);
    printMessage ('Wybrany ruch gracza to: ' + playerMove + '.');
    console.log ('Wybór gracza: ' + playerMove + ' ' + playerInput);

    // Computer choice
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName (randomNumber);
    printMessage ('Wylosowany ruch komputera to: ' + computerMove + '.')
    console.log ('Wylosowana wartość: ' + computerMove + ' ' + randomNumber);

    // Score
    function displayResult (argComputerMove, argPlayerMove){
        if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            return 'Remis';
        } 
        else if (argComputerMove == 'kamień' &&  argPlayerMove == 'papier'){
            return 'Wygrywasz :)';
        } 
        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            return 'Przegrywasz :(';
        } 
        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            return 'Przegrywasz :(';
        } 
        else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
            return 'Remis';
        } 
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Wygrywasz :)';
        } 
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Wygrywasz :)';
        } 
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            return 'Przegrywasz :(';
        } 
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            return 'Remis';
        } 
        else{return 'Nieznany zwycięzca';
        }
    }

    let score = displayResult (computerMove, playerMove);
    printMessage (score);
    console.log ('Wynik: ' + score);
}

// Buttons
let buttonRock = document.getElementById('button_rock');
let buttonPaper = document.getElementById('button_paper');
let buttonScissors = document.getElementById('button_scissors');

buttonRock.addEventListener ('click', function() {
    playGame (1)
});
buttonPaper.addEventListener ('click', function() {
    playGame (2)
});
buttonScissors.addEventListener ('click', function() {
    playGame (3)
});
