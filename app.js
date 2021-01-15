const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn__reset')[0]; 
let missed = 0; 

const phrases = [
  'Alice in Wonderland',
  'I Travel the World and the Seven Seas',
  'Along Came a Spider',
  'Green Eggs and Ham', 
  'The Call of the Wild'
];

btn_reset.addEventListener('click', () => { // Hides button to start the game
  const startGame = document.getElementById('overlay');
  startGame.style.display = 'none';  
});

function getRandomPhraseAsArray(arr) {  // does random stuff to arrays that is passed in 
  let randomNumber = Math.floor(Math.random() * phrases.length);
  return arr[randomNumber];
  };

function addPhraseToDisplay(arr)  {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    let ul = phrase.querySelector('ul');
    ul.appendChild(li);
    if( arr[i] != '' ) {
      li.classList.add('letter');
    } else { 
      li.classList.add('space');
    }
  }
};

const phraseArray = getRandomPhraseAsArray(phrases);
// addPhraseToDisplay(phraseArray);
addPhraseToDisplay(phraseArray.toLowerCase());


function checkLetter(btn) { 
  let lis = phrase.getElementsByTagName('li'); 
  let match = null;

  for(let i = 0; i < lis.length; i++) {
      if(btn === lis[i].textContent) {
          lis[i].classList.add('show');
          match = btn;
          
      }
  }
  return match;
};

qwerty.addEventListener('click', (event) => {
  let keyrow = qwerty.querySelectorAll('.keyrow');
  let button = qwerty.getElementsByTagName('button');
  if ( event.target.tagName === 'BUTTON' && button.classList != 'chosen' ) {
      event.target.classList.add('chosen');
      event.target.disabled = true;
      const letterFound = checkLetter(event.target.textContent);
      if (letterFound == null) {
          let ol = document.querySelectorAll('#scoreboard ol li img');
          ol[missed].src = "images/lostHeart.png";
          missed += 1;
      }
  }
  checkWin();
});
function checkWin() {
  let letter = document.querySelectorAll(".letter"); // declare variable
  let show = document.querySelectorAll(".show"); // declare variable
  const overlay = document.getElementById('overlay'); // reuse variable
  if ( show.length == letter.length ) {
      overlay.style.display = 'block';
      // overlay.className = 'win';
      overlay.classList.add("win")
      overlay.textContent = 'You win!';
  }
  if ( missed >= 5 ) {
      overlay.style.display = 'block';
      // overlay.className = 'lose';
      overlay.classList.add('lose');
      overlay.textContent = 'You lose'; // Dsiplay message you lose 
  }
};

