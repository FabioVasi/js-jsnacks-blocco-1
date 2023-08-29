/*
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt('Type a word here');

const secondWord = prompt('Type a second word here');

console.log(firstWord, secondWord, firstWord.length, secondWord.length);

if(firstWord.length > secondWord.length){
    console.log('La prima parola è più lunga');
} else if(firstWord.length < secondWord.length){
    console.log('La seconda parola è più lunga');
} else{
    console.log('Le parole hanno la stessa lunghezza');
}
