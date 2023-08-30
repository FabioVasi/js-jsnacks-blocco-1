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

const numberOne = Number(prompt('Type a number here.'));

const numberTwo = Number(prompt('Type a second number here.'));

console.log('first number ', numberOne, 'second number ', numberTwo);

let i = 0;

while (i < 2) {

    if(numberOne > numberTwo) {

        console.log('Il primo numero è maggiore del secondo');
    
    } else if(numberTwo > numberOne) {
    
        console.log('Il secondo numero è maggiore del primo');
    
    } else {
    
        console.log('I numeri sono uguali');
    
    }

    i++ 
}