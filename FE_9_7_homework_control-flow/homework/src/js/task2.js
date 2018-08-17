let start = confirm('Do you want to play a game?');
if (!start) {
    console.log('You did not become a millionaire');
}

while (start) {
    const i = 1;	
    let max = 5,
        min = 0,
        newGame = 0,
        total = 0,
        prize = 10,
        win = 10,
        attempts = 0,
        turns = 3,
        askContinue = true,
        random = Math.floor(Math.random() * (max - min + i) + min); //Generate a random number
     
    while (attempts < 3 && askContinue) {
		
        let guess = prompt('Enter a whole number between 0 and '
		+ max + '\n' + 'Attempts left: ' 
		+ turns + '\n' + 'Total prize: ' + total 
		+ '\n' + 'Possible prize on current attempt: ' + win + '$');
        if (Number(guess) === random) {
            total += win; //Prize must be added to the previous one 
            attempts = 0;
            turns = 3;
            max = max * 2; // Make number range twice as big as the previous one
            prize *= 3; // Make three times bigger maximum prize 
            win = prize; // prize at the current attempt
            random = Math.floor(Math.random() * (max - min + i) + min);
            askContinue = confirm('Do you want to continue a game?');
        } else if (!isFinite(guess) || !guess || isNaN(guess)) { //Ensure user entered something
            console.log('Incorrect data! Please enter a valid number');
            break;

        } else { //User have lost
            turns--;
            attempts++;
            win = Math.floor(prize / (attempts * 2) * i) / i;
        }
    }

    console.log('Thank you for a game. Total prize is: ' + total + '$');
    start = confirm('Do you want to try again?'); //Start a new Game
    newGame = newGame + i ;
}