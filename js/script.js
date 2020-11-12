// Player
let playerInput = prompt ('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
let playerMove = 'Nieznany ruch';

if (playerInput == 1) {playerMove = 'kamień';
} else if (playerInput == 2) {playerMove = 'papier';
} else if (playerInput == 3) {playerMove ='nożyce';
}

console.log ('Gracz wybrał ' + playerInput);
printMessage ('Gracz wybrał ' + playerMove);

// Computer
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'Nieznany ruch';

if (randomNumber == 1) {computerMove = 'kamień';
} else if (randomNumber == 2) {computerMove = 'papier';
} else if (randomNumber == 3) {computerMove = 'nożyce';
}

console.log ('Wylosowana liczba to ' + randomNumber);
printMessage ('Wylosowana zagrywka to ' + computerMove);

// Score
let score = 'Nieznany zwycięzca';

if (computerMove == 'kamień' && playerMove == 'kamień') {score = 'Remis';
} else if (computerMove == 'kamień' &&  playerMove == 'papier') { score = 'Wygrywasz :)';
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {score = 'Przegrywasz :(';
} else if (computerMove == 'papier' && playerMove == 'kamień') {score = 'Przegrywasz :(';
} else if (computerMove == 'papier' && playerMove == 'papier') {score = 'Remis';
} else if (computerMove == 'papier' && playerMove == 'nożyce') {score = 'Wygrywasz :)';
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {score = 'Wygrywasz :)';
} else if (computerMove == 'nożyce' && playerMove == 'papier') {score = 'Przegrywasz :(';
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {score = 'Remis';
} else {score = 'Nieznany zwycięzca';
} 

printMessage (score);