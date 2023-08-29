/*
Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const userFirstNumber = Number(prompt('Type a number here.'));

const userSecondNumber = Number(prompt('Type a second number here.'));

console.log('first number ', userFirstNumber, 'second number ', userSecondNumber);

if(userFirstNumber > userSecondNumber) {

    console.log('Il primo numero è maggiore del secondo');

} else {

    console.log('Il secondo numero è maggiore del primo');

}






