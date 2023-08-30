/*
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

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
*/


/*
(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let i = 0;

const wordList = []

while (i < 2) {

    const userWord = prompt('type a word here');

    console.log(userWord, userWord.length);

    wordList.push(userWord.length);

    i++

}

if(wordList[0] > wordList[1]) {

    console.log('La prima parola è più lunga');

} else if(wordList[1] > wordList[0]) {

    console.log('La seconda parola è più lunga');

} else {

    console.log('Le parole hanno la stessa lunghezza');

}