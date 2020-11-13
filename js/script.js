// // Player
// let playerInput = prompt ('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
// let playerMove = 'Nieznany ruch';

// if (playerInput == 1) {playerMove = 'kamień';
// } else if (playerInput == 2) {playerMove = 'papier';
// } else if (playerInput == 3) {playerMove ='nożyce';
// }

// console.log ('Gracz wybrał ' + playerInput);
// printMessage ('Gracz wybrał ' + playerMove);

// // Computer
// let randomNumber = Math.floor(Math.random() * 3 + 1);
// let computerMove = 'Nieznany ruch';

// if (randomNumber == 1) {computerMove = 'kamień';
// } else if (randomNumber == 2) {computerMove = 'papier';
// } else if (randomNumber == 3) {computerMove = 'nożyce';
// }

// console.log ('Wylosowana liczba to ' + randomNumber);
// printMessage ('Wylosowana zagrywka to ' + computerMove);

// // Score
// let score = 'Nieznany zwycięzca';

// if (computerMove == 'kamień' && playerMove == 'kamień') {score = 'Remis';
// } else if (computerMove == 'kamień' &&  playerMove == 'papier') { score = 'Wygrywasz :)';
// } else if (computerMove == 'kamień' && playerMove == 'nożyce') {score = 'Przegrywasz :(';
// } else if (computerMove == 'papier' && playerMove == 'kamień') {score = 'Przegrywasz :(';
// } else if (computerMove == 'papier' && playerMove == 'papier') {score = 'Remis';
// } else if (computerMove == 'papier' && playerMove == 'nożyce') {score = 'Wygrywasz :)';
// } else if (computerMove == 'nożyce' && playerMove == 'kamień') {score = 'Wygrywasz :)';
// } else if (computerMove == 'nożyce' && playerMove == 'papier') {score = 'Przegrywasz :(';
// } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {score = 'Remis';
// } else {score = 'Nieznany zwycięzca';
// } 

// printMessage (score);

// Functions Exercise 
// function calculateChange(argPrice, argPaidAmount) {
//     console.log('wywołano calculateChange')
//     console.log('argumenty: ' + argPrice + ', ' + argPaidAmount);
//     return (argPaidAmount - argPrice);
//   }
  
//   let change1 = calculateChange(13, 20);
//   printMessage('Do zapłaty 13zł, zapłacono 20zł, reszta: ' + change1);
  
//   let change2 = calculateChange(77, 100);
//   printMessage('Do zapłaty 77zł, zapłacono 100zł, reszta: ' + change2);
  
//   printMessage('Do zapłaty 49zł, zapłacono 50zł, reszta: ' + calculateChange(49, 50));

  function calculateChange2 (price, paid) {
    console.log ('wywołano calculateChange2');
    console.log ('argumenty funkcji ' + price + paid);
    return (paid - price);
  }

  let change3 = calculateChange2(21, 25);
  printMessage('Do zapłaty 21, zapłacono 25, reszta wynosi: ' + change3);

  printMessage ('Do zapłaty 10, zapłacono 20, reszta: ' + calculateChange2(10, 20));


  