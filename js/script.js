// Variables
let computerMove = 'kamień';
let playerMove = 'papier';
let randomFraction = Math.random ();
let calculation = randomFraction * 3 + 1; 
let roundNumber = Math.floor (calculation);


printMessage ('Zagrałem ' + computerMove + '.' + ' Jeśli twój ruch to ' + playerMove + ' to wygrywasz.');

printMessage ('Wylosowany ułamek to ' + randomFraction);

printMessage ('Ułamek pomnożony przez 3 i powiększony o 1 to ' + calculation);

printMessage ('Liczba po zaokrągleniu w dół to ' + roundNumber);


// od 11 do 19

// variables
let gameResult = Math.floor (Math.random() * 9 + 11);

printMessage ('Wylosowana większa liczba to ' + gameResult);