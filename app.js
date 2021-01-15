const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const btn__reset = document.getElementsByClassName('btn__reset')[0]; 
let missed = 0; 

const phrases = [
  ['Alice in Wonderland'],
  ['I Travel the World and the Seven Seas'],
  ['Along Came a Spider'],
  ['Green Eggs and Ham'], 
  ['The Call of the Wild']
];

btn__reset.addEventListener('click', () => { // Hides button when clicking Start Game
  const startGame = document.getElementById('overlay');
  startGame.style.display = 'none';  
});

function getRandomPhraseAsArray(arr) {  // does random stuff to arrays that is passed in 
  let randomNumber = Math.floor(Math.random() * phrases.length);
  return arr[randomNumber];
  };

  
function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i++) { // 
      let li = document.createElement('li'); // create 'li'
      li.textContent = arr[i]; // add content to 'li[i]'
      let ul = phrase.querySelector('ul'); // declare ul
      ul.appendChild(li); // attach 'li' with content to 'ul'
      if( arr[i] != ' ' ){ // test for character or white space
          li.classList.add('letter'); // add class letter to character
      }
      else {
          li.classList.add('space'); // add class space to character
      }
  }
};


const phraseArray = getRandomPhraseAsArray(phrases);
// addPhraseToDisplay(phraseArray);
addPhraseToDisplay(phraseArray.toLowerCase());

/*function checkLetter () => {

}
function checkWin  () => {
    let show = document.querySelectorAll('.show');
    let letters = document.querySelectorAll('.letter');
    let title = overlay.querySelector('.title');
    if (show.length == letters.length) {
      btn_reset.style.display = 'none';
      overlay.className = 'win';
      title.textContent = 'win';
      overlay.style.display = 'flex';
    } else if (missed >= 5) {
      btn_reset.style.display = 'none';
      overlay.className = 'lose';
      title.textContent = 'lose';
      overlay.style.display = 'flex';
    }
  }

  qwerty.addEventListener('click', () => {

  });
/*const myButton = document.getElementsById('myButton');
const correct = [];
const incorrect = []; 
const missedAnswers = 0;
const qwerty = '';
const phrases = [
    ['alice in wonderland'],
    ['i travel the world and the seven seas'],
    ['along came a spider'],
    ['green eggs and ham'], 
    ['the call of the wild']
 ];

myButton.addEventListener('click', () => {
          startDiv.style.display = 'none';                 
});




for ( let i = 0; i < questions.length; i++ ) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    
    if ( response === answer ) {
      correctAnswers++;
      correct.push(question);
    } else {
      incorrect.push(question);
    }
  }
  
  function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }
  
  const btn_reset 
  
  // 4. Display the number of correct answers to the user
  
  let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${ createListItems(correct) }</ol>
  
    <h2>You got these questions wrong:</h2>
    <ol>${ createListItems(incorrect) }</ol>
  `;
  
  document.querySelector('main').innerHTML = html;*/


