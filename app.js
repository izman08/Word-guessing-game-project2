let words = ['apple', 'banana', 'orange', 'grape', 'mango'];
let selectedWord = '';
let displayedWord = '';
let guessedLetters = [];
let wrongGuesses = 0;
let maxGuesses = 6;


function chooseWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = '_ '.repeat(selectedWord.length).trim();
    document.getElementById('wordDisplay').textContent = displayedWord;
}


chooseWord();


function guessLetter() {
    let letter = document.getElementById('letterInput').value.toLowerCase();
    document.getElementById('letterInput').value = '';


    if (guessedLetters.includes(letter)) {
        document.getElementById('message').textContent = "You've already guessed that letter!";
        return;
    }

    guessedLetters.push(letter);
    document.getElementById('guessedLetters').textContent = guessedLetters.join(', ');


    if (selectedWord.includes(letter)) {
        let updatedWord = '';
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter || displayedWord[i * 2] !== '_') {
                updatedWord += selectedWord[i] + ' ';
            } else {
                updatedWord += '_ ';
            }
        }
        displayedWord = updatedWord.trim();
        document.getElementById('wordDisplay').textContent = displayedWord;

        if (!displayedWord.includes('_')) {
            document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
            document.getElementById('message').style.color = 'green';
            return;
        }
    } else {
        wrongGuesses++;
        document.getElementById('message').textContent = `Wrong guess! You have ${maxGuesses - wrongGuesses} guesses left.`;
        document.getElementById('message').style.color = 'red';

   
        if (wrongGuesses >= maxGuesses) {
            document.getElementById('message').textContent = `Game over! The word was "${selectedWord}".`;
            document.getElementById('message').style.color = 'red';
        }
    }
}


function resetGame() {
    guessedLetters = [];
    wrongGuesses = 0;
    document.getElementById('guessedLetters').textContent = '';
    document.getElementById('message').textContent = '';
    chooseWord();
}