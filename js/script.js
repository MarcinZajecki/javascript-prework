// Function1
function getMoveName (moveId) {
        if (moveId == 1) {return 'kamień';
    }   else if (moveId == 2) {return 'papier';
    }   else if (moveId == 3) {return 'nożyce';
    }   else {return 'nieznany ruch';
    }
}

console.log ('Legenda: 1 = papier, 2 = kamień, 3 = nożyce');

// Player
let playerInput = prompt ('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
let playerMove = getMoveName (playerInput);

printMessage ('Wybrany ruch gracza to: ' + playerMove + '.');

console.log ('Wybór gracza: ' + playerMove + ' ' + playerInput);

// Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName (randomNumber);

printMessage ('Wylosowany ruch komputera to: ' + computerMove + '.')

console.log ('Wylosowana wartość: ' + computerMove + ' ' + randomNumber);

// Score
function displayResult (argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {score = 'Remis';
    } else if (argComputerMove == 'kamień' &&  argPlayerMove == 'papier') { score = 'Wygrywasz :)';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {score = 'Przegrywasz :(';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {score = 'Przegrywasz :(';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {score = 'Remis';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {score = 'Wygrywasz :)';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {score = 'Wygrywasz :)';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {score = 'Przegrywasz :(';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {score = 'Remis';
    } else {score = 'Nieznany zwycięzca';
    }
}

let score1 = displayResult (computerMove, playerMove);

printMessage (score);

console.log ('Wynik: ' + score);