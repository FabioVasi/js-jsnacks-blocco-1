/*
Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.


const number_1 = Number(prompt('Number 1, type here.'));
const number_2 = Number(prompt('Number 2, type here.'));
const number_3 = Number(prompt('Number 3, type here.'));
const number_4 = Number(prompt('Number 4, type here.'));
const number_5 = Number(prompt('Number 5, type here.'));
const number_6 = Number(prompt('Number 6, type here.'));
const number_7 = Number(prompt('Number 7, type here.'));
const number_8 = Number(prompt('Number 8, type here.'));
const number_9 = Number(prompt('Number 9, type here.'));
const number_10 = Number(prompt('Number 10, type here.'));

console.log(number_1, number_2, number_3, number_4, number_5, number_6, number_7, number_8, number_9, number_10,);

let totale = Number(number_1 + number_2 + number_3 + number_4 + number_5 + number_6 + number_7 + number_8 + number_9 + number_10);

console.log(totale);
*/

const numbersList = [Number(prompt('Number 1, type here.')) + Number(prompt('Number 2, type here.')) + Number(prompt('Number 3, type here.')) + Number(prompt('Number 4, type here.')) + Number(prompt('Number 5, type here.')) + Number(prompt('Number 6, type here.')) + Number(prompt('Number 7, type here.')) + Number(prompt('Number 8, type here.')) + Number(prompt('Number 9, type here.')) + Number(prompt('Number 10, type here.'))]

console.log(numbersList);

for (let i = 0; i < 10; i++) {

    const userNumbers = numbersList[i];
    
    console.log('totale = ' + userNumbers);

}