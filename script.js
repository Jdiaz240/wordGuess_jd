//create an array of words to use for game
let wordBank = ['superman', 'batman', 'flash']
var show = document.getElementById('words');
var blanks = []

//function to start game
//starts timer and calls first getWords function
function startGame() {
    //hides the start button which will get replaced with the words content
    var button = document.getElementById('start');
    button.setAttribute('class', 'hide');
    var text = document.getElementById('words');
    text.removeAttribute('class', 'hide');

    //stores the interval method
    var countDown;
    //starts the timer at 30 seconds
    var time = 30;
    //assigns the interval method to countDown variable
    //on click decreases the number 30 by 1 
    countDown = setInterval(function () {
        time--;
        //handles the numbers that are displayed
        document.querySelector('#timer').textContent = time + 'seconds';
        //once timer ends will replace time + seconds with better luck next time
        if (time == 0) {
            clearInterval(countDown)
            document.querySelector('#timer').textContent = 'Better luck Next Time';
        }
        //sets the timer to decrease every second 1000milliseconds = 1 second
    }, 1000)
    //calls function to replace start button with blank words
    getWords()
}

function getWords() {
    //gets a random word from array
    var word = wordBank[Math.floor(Math.random() * wordBank.length)];
    //turns the word into an array of letters
    var wordArray = word.split(''); //['b','o','b']
    // console.log(wordArray);
    var blankSpaces = wordArray.length; // blankspaces = 3
    blanks = []
    //loop 3 times
    for (let i = 0; i < blankSpaces; i++) {
        //for every loop create _
        blanks.push('_');
    }
    //calls function to create blank spaces in word
    show.innerHTML = blanks;

    document.addEventListener('keydown', function (event) {
        var key = event.key.toLowerCase()
        var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
        if (alphabetNumericCharacters.includes(key)) {
            var letter = event.key;

        }
        getWin(wordArray, letter);
    })
}

function getWin(wordArray, letter) {
    console.log(letter);
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === letter) {
            blanks[i] = letter
        }
        show.innerHTML = blanks.join('')
    }
}

//event listener to start game

document.getElementById('start').addEventListener('click', startGame)
