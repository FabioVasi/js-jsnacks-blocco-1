/*
Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numbers = [''];

const number_1 = Number(prompt('Number 1, type here.'));
const number_2 = Number(prompt('Number 2, type here.'));
const number_3 = Number(prompt('Number 3, type here.'));
const number_4 = Number(prompt('Number 4, type here.'));
const number_5 = Number(prompt('Number 5, type here.'));
const number_6 = Number(prompt('Number 6, type here.'));

console.log(number_1, number_2, number_3, number_4, number_5, number_6);

if(number_1 % 2 !== 0) {

    numbers = numbers.push(number_1);

    console.log(numbers);

} else if (number_2 % 2 !== 0) {

    numbers = numbers.push(number_2);

    console.log(numbers);

} else if (number_3 % 2 !== 0) {
    
    numbers = numbers.push(number_3);

    console.log(numbers);

} else if (number_4 % 2 !== 0) {

    numbers = numbers.push(number_4);

    console.log(numbers);

} else if (number_5 % 2 !== 0) {

    numbers = numbers.push(number_5);

    console.log(numbers);

} else if (number_6 % 2 !== 0) {

    numbers = numbers.push(number_6);

    console.log(numbers);

}

