/*
Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.


const userFirstNumber = Number(prompt('Type a number here.'));

const userSecondNumber = Number(prompt('Type a second number here.'));

console.log('first number ', userFirstNumber, 'second number ', userSecondNumber);

if(userFirstNumber > userSecondNumber) {

    console.log('Il primo numero è maggiore del secondo');

} else if(userSecondNumber > userFirstNumber) {

    console.log('Il secondo numero è maggiore del primo');

} else {

    console.log('I numeri sono uguali');

}
*/

/*
Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let i = 0;

const numbersList = []

while (i < 2) {

    const userNumbers = Number(prompt('type a random number'));

    console.log(userNumbers);

    numbersList.push(userNumbers);

    i++

}

if(numbersList[0] > numbersList[1]) {

    console.log('Il primo numero è maggiore del secondo ' + numbersList[0]);

} else if(numbersList[1] > numbersList[0]) {

    console.log('Il secondo numero è maggiore del primo ' + numbersList[1]);

} else {

    console.log('I numeri sono uguali ritenta');

}